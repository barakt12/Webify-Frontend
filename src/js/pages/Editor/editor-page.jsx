import { EditorSidebar } from './cmps/sidebar/editor-sidebar'
import { EditorBoard } from './cmps/editor-board'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import { templateService } from '../../services/templates.service'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { setWap, updateWap, setSelectedCmp } from '../../store/wap/wap.action'
import { wapService } from '../../services/wap-service'
import { socketService } from '../../services/socket.service'
import { useLocation, useParams } from 'react-router-dom'
import { MouseCursor } from './cmps/Mouse-cursor'

export function Editor() {
  let isFromSidebar = null
  const queryAttr = 'data-rbd-drag-handle-draggable-id'
  const [placeholderProps, setPlaceholderProps] = useState({})
  const { wap, isCollabMode } = useSelector((storeState) => storeState.wapModule)
  const loggedUser = useSelector((storeState) => storeState.userModule.user)
  const dispatch = useDispatch()
  const params = useParams()
  const _ = require('lodash')
  const [connectedMouses, setConnectedMouses] = useState([])
  useEffect(() => {
    if (!wap) {
      getDraft()
    }
  }, [])

  useEffect(() => {
    if (params.editorId) {
      const editorId = params.editorId
      socketService.setup()
      socketService.emit('wap connection', editorId)
      socketService.on('wap update', (newWap) => {
        dispatch(setWap(newWap))
      })
      socketService.on('get wap', () => {
        wap && socketService.emit('wap update', wap)
      })
      socketService.on('mouse_position_update', ({ id, pos, user, color }) => {
        console.log(id, user)
        setConnectedMouses((prevState) => {
          const existingMouseIdx = prevState.findIndex((mouse) => mouse.id === id)
          if (existingMouseIdx < 0) {
            return [...prevState, { id, pos, user, color }]
          } else {
            return prevState.map((mouse, idx) => {
              if (mouse.id === id) return { ...mouse, pos: pos }
              return mouse
            })
          }
        })
      })
      socketService.on('user_left', ({ userId }) => {
        setConnectedMouses((prevState) => {
          return prevState.filter((mouse) => mouse.id !== userId)
        })
      })
    }

    return () => {
      dispatch(setSelectedCmp(null))
      socketService.off('send wap')
      socketService.off('wap update')
      socketService.off('mouse_position_update')
      socketService.terminate()
    }
  }, [isCollabMode])

  const getDraft = async () => {
    const draft = await wapService.getDraft()
    if (draft[0]?.cmps?.length) {
      delete draft[0]._id
      dispatch(setWap(draft[0]))
    }
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const getDraggedDom = (draggableId) => {
    const domQuery = `[${queryAttr}='${draggableId}']`
    const draggedDOM = document.querySelector(domQuery)

    return draggedDOM
  }

  const addCmpToPage = (result) => {
    let cmp = templateService.getCmpById(result.draggableId)
    cmp = JSON.parse(JSON.stringify(cmp))
    cmp.id = uuidv4()
    wapService.changeCmpId(cmp)
    const newState = wap?.cmps ? JSON.parse(JSON.stringify(wap)) : { cmps: [] }
    newState.cmps.splice(result.destination.index, 0, cmp)
    dispatch(updateWap(newState))
  }

  const handleDragStart = (event) => {
    if (event.source.droppableId === 'hb5') {
      isFromSidebar = true
      return
    }
    const draggedDOM = getDraggedDom(event.draggableId)

    if (!draggedDOM) return

    const { clientHeight, clientWidth } = draggedDOM
    const sourceIndex = event.source.index
    var clientY =
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      [...draggedDOM.parentNode.children].slice(0, sourceIndex).reduce((total, curr) => {
        const style = curr.currentStyle || window.getComputedStyle(curr)
        const marginBottom = parseFloat(style.marginBottom)
        return total + curr.clientHeight + marginBottom
      }, 0)

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft),
    })
  }

  const handleDragUpdate = (event) => {
    if (event.source.droppableId === 'hb5') {
      isFromSidebar = true
      return
    }
    if (!event.destination) return

    const draggedDOM = getDraggedDom(event.draggableId)

    if (!draggedDOM) return

    const { clientHeight, clientWidth } = draggedDOM
    const destinationIndex = event.destination.index
    const sourceIndex = event.source.index

    const childrenArray = [...draggedDOM.parentNode.children]
    const movedItem = childrenArray[sourceIndex]
    childrenArray.splice(sourceIndex, 1)

    const updatedArray = [...childrenArray.slice(0, destinationIndex), movedItem, ...childrenArray.slice(destinationIndex + 1)]

    var clientY =
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
        const style = curr.currentStyle || window.getComputedStyle(curr)
        const marginBottom = parseFloat(style.marginBottom)
        return total + curr.clientHeight + marginBottom
      }, 0)

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft),
    })
  }

  const handleDragEnd = async (result) => {
    setPlaceholderProps({})
    // dropped outside the list
    if (!result.destination) return
    else if (result.destination.droppableId === 'editor' && result.source.droppableId !== 'editor') {
      //   copy(
      //     ITEMS,
      //     this.state[destination.droppableId],
      //     source,
      //     destination
      //  )
      addCmpToPage(result)
      return
    }

    const content = reorder(wap.cmps, result.source.index, result.destination.index)
    if (content) {
      dispatch(updateWap({ ...wap, cmps: content }))
    }
  }

  const handleMouseDebounce = _.debounce((ev) => handleMouseMove(ev), 0.7)

  const handleMouseMove = (event) => {
    if (!params.editorId) return
    socketService.emit('mouse_position', {
      pos: { mx: event.clientX, my: event.clientY },
      user: loggedUser?.fullname || 'guest',
    })
  }

  return (
    <section className="editor-container" onMouseMove={handleMouseDebounce}>
      <DragDropContext onDragStart={handleDragStart} onDragUpdate={handleDragUpdate} onDragEnd={handleDragEnd}>
        <EditorSidebar />
        <EditorBoard wap={wap} isFromSidebar={isFromSidebar} placeholderProps={placeholderProps} />
      </DragDropContext>
      {params.editorId && connectedMouses.length && connectedMouses.map((mouse) => <MouseCursor mouse={mouse} />)}
    </section>
  )
}
