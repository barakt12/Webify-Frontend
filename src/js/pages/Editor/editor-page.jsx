import { EditorSidebar } from './cmps/editor-sidebar'
import { EditorBoard } from './cmps/editor-board'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import { wapService } from '../../services/wap-service'

export function Editor() {
  const queryAttr = 'data-rbd-drag-handle-draggable-id'
  const [placeholderProps, setPlaceholderProps] = useState({})
  const [elements, setElements] = useState(null)
  const [pageContent, setPageContent] = useState({})

  const wap = useSelector((storeState) => storeState.wapModule.wap)

  useEffect(() => {
    setElements(wapService.getTemplates())
    setPageContent(wap)
  }, [wap])

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  // Moves an item from one list to another list.

  const copy = (source, destination, droppableSource, droppableDestination) => {
    console.log('==> dest', destination)

    const sourceClone = Array.from(source)
    const destClone = Array.from(destination)
    const item = sourceClone[droppableSource.index]

    destClone.splice(droppableDestination.index, 0, { ...item, id: 'test123' })
    return destClone
  }

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source)
    const destClone = Array.from(destination)
    const [removed] = sourceClone.splice(droppableSource.index, 1)

    destClone.splice(droppableDestination.index, 0, removed)

    const result = {}
    result[droppableSource.droppableId] = sourceClone
    result[droppableDestination.droppableId] = destClone

    return result
  }

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    ...draggableStyle,
  })

  // const handleDragStart = (event) => {
  //   const draggedDOM = getDraggedDom(event.draggableId)

  //   if (!draggedDOM) return

  //   const { clientHeight, clientWidth } = draggedDOM
  //   const sourceIndex = event.source.index
  //   var clientY =
  //     parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
  //     [...draggedDOM.parentNode.children]
  //       .slice(0, sourceIndex)
  //       .reduce((total, curr) => {
  //         const style = curr.currentStyle || window.getComputedStyle(curr)
  //         const marginBottom = parseFloat(style.marginBottom)
  //         return total + curr.clientHeight + marginBottom
  //       }, 0)

  //   setPlaceholderProps({
  //     clientHeight,
  //     clientWidth,
  //     clientY,
  //     clientX: parseFloat(
  //       window.getComputedStyle(draggedDOM.parentNode).paddingLeft
  //     ),
  //   })
  // }

  const addCmpToPage = (result) => {
    // if (result.destination.droppableId !== 'editor') return
    const cmp = wapService.getCmpById(result.draggableId)
    setPageContent((prevState) => {
      //super-copy the prevState array with his sub arrays.
      const newState = JSON.parse(JSON.stringify(prevState))
      //adds to cmp to the destination index
      newState.cmps.splice(result.destination.index, 0, cmp)
      return newState
    })
  }

  const handleDragEnd = (result) => {
    setPlaceholderProps({})
    // dropped outside the list
    if (!result.destination) return
    else if (
      result.destination.droppableId === 'editor' &&
      result.source.droppableId !== 'editor'
    ) {
      addCmpToPage(result)
      return
    }

    const content = reorder(
      pageContent.cmps,
      result.source.index,
      result.destination.index
    )
    console.log(content)
    if (content)
      setPageContent((prevState) => ({ ...prevState, cmps: content }))
    // setHeaders(items);
  }

  // const handleDragUpdate = (event) => {
  //   if (!event.destination) return

  //   const draggedDOM = getDraggedDom(event.draggableId)

  //   if (!draggedDOM) return

  //   const { clientHeight, clientWidth } = draggedDOM
  //   const destinationIndex = event.destination.index
  //   const sourceIndex = event.source.index

  //   const childrenArray = [...draggedDOM.parentNode.children]
  //   const movedItem = childrenArray[sourceIndex]
  //   childrenArray.splice(sourceIndex, 1)

  //   const updatedArray = [
  //     ...childrenArray.slice(0, destinationIndex),
  //     movedItem,
  //     ...childrenArray.slice(destinationIndex + 1),
  //   ]

  //   var clientY =
  //     parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
  //     updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
  //       const style = curr.currentStyle || window.getComputedStyle(curr)
  //       const marginBottom = parseFloat(style.marginBottom)
  //       return total + curr.clientHeight + marginBottom
  //     }, 0)

  //   setPlaceholderProps({
  //     clientHeight,
  //     clientWidth,
  //     clientY,
  //     clientX: parseFloat(
  //       window.getComputedStyle(draggedDOM.parentNode).paddingLeft
  //     ),
  //   })
  // }

  const getDraggedDom = (draggableId) => {
    const domQuery = `[${queryAttr}='${draggableId}']`
    const draggedDOM = document.querySelector(domQuery)
    return draggedDOM
  }

  return (
    <section className='editor-container'>
      <DragDropContext onDragEnd={handleDragEnd}>
        <EditorSidebar elements={elements} />
        <EditorBoard
          pageContent={pageContent}
          placeholderProps={placeholderProps}
          // getListStyle={getListStyle}
          getItemStyle={getItemStyle}
        />
      </DragDropContext>
    </section>
  )
}
