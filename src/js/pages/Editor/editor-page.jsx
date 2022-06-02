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

export function Editor() {
  let isFromSidebar = null
  const queryAttr = 'data-rbd-drag-handle-draggable-id'
  const [placeholderProps, setPlaceholderProps] = useState({})
  const { wap, isCollabMode } = useSelector((storeState) => storeState.wapModule)
  const dispatch = useDispatch()
  const params = useParams()

  // const handleMouseMove = (event) => {
  //   let mousePos = { mx: event.clientX, my: event.clientY }
  // }

  useEffect(() => {
    if (!wap) {
      getDraft()
    }

    if (params.editorId) {
      const editorId = params.editorId
      socketService.setup()
      socketService.emit('wap connection', editorId)
      // socketService.emit('mouse_position', {mx : x, my : y})
      socketService.on('get wap', () => {
        wap && socketService.emit('wap update', wap)
      })
      socketService.on('wap update', (newWap) => dispatch(setWap(newWap)))
    }
    return () => {
      dispatch(setSelectedCmp(null))
      socketService.off('get wap')
      socketService.off('send wap')
      socketService.off('wap update')
      socketService.terminate()
    }
  }, [isCollabMode])

  const copy = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source)
    const destClone = Array.from(destination)
    const cmp = sourceClone[droppableSource.index]

    destClone.splice(droppableDestination.index, 0, { ...cmp, id: uuidv4() })
    return destClone
  }

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
    console.log(wap)
    newState.cmps.splice(result.destination.index, 0, cmp)
    dispatch(updateWap(newState))
  }

  const handleDragStart = (event) => {
    //WARNING! Dragging components from sidebar will cause placeholder issues because of its size.
    //if the source is the sidebar return!
    // if(event.source.droppableId === 'hb5') return
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
    // if(event.source.droppableId === 'hb5') return
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

  return (
    <section className="editor-container">
      <DragDropContext onDragStart={handleDragStart} onDragUpdate={handleDragUpdate} onDragEnd={handleDragEnd}>
        <EditorSidebar />
        <EditorBoard wap={wap} isFromSidebar={isFromSidebar} placeholderProps={placeholderProps} />
      </DragDropContext>
    </section>
  )
}
