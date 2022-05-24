import { ComponentsList } from './cmps/components'
import { EditorDisplay } from './cmps/editor-board'
import { useEffect, useState } from 'react'
import { Header1 } from '../../templates-example/headers/header1'
import { DragDropContext } from 'react-beautiful-dnd'
import { wapService } from '../../services/wap-service'


export function Editor() {
  const queryAttr = "data-rbd-drag-handle-draggable-id";
  const [placeholderProps, setPlaceholderProps] = useState({});
  const [headers, setHeaders] = useState(null)
  const [pageContent, setPageContent] = useState([])

  useEffect(() => {
    setHeaders(wapService.getHeaders())
  }, [])

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    //if we need margin or padding on that container use that
    // padding: grid * 2,
    // margin: `0 0 ${grid}px 0`,
  
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",
  
    // styles we need to apply on draggables
    ...draggableStyle
  });
  
  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: '5px',
    width: '80%',
    position: "relative"
  });

  const handleDragStart = event => {
    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM) return

    const { clientHeight, clientWidth } = draggedDOM;
    const sourceIndex = event.source.index;
    var clientY =
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      [...draggedDOM.parentNode.children]
        .slice(0, sourceIndex)
        .reduce((total, curr) => {
          const style = curr.currentStyle || window.getComputedStyle(curr);
          const marginBottom = parseFloat(style.marginBottom);
          return total + curr.clientHeight + marginBottom;
        }, 0);

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(
        window.getComputedStyle(draggedDOM.parentNode).paddingLeft
      )
    })
  }

  function addCmpToPage(result) {
    // if (result.destination.droppableId !== 'editor') return
    const cmp = wapService.getCmpById(result.draggableId)
    setPageContent([...pageContent, cmp])
  }

  const handleDragEnd = (result) => {
    setPlaceholderProps({});
    // dropped outside the list
    if (!result.destination) return
    else if (result.destination.droppableId === 'editor' &&
             result.source.droppableId !== 'editor'){
              addCmpToPage(result)
              return
             } 

    const content = reorder(
      pageContent,
      result.source.index,
      result.destination.index
    )
    console.log(content)
    setPageContent(content)
    // setHeaders(items);
  }

  const handleDragUpdate = event => {
    if (!event.destination) return
    console.log('hello',event.draggableId)

    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM) return

    const { clientHeight, clientWidth } = draggedDOM;
    const destinationIndex = event.destination.index;
    const sourceIndex = event.source.index;

    const childrenArray = [...draggedDOM.parentNode.children];
    const movedItem = childrenArray[sourceIndex];
    childrenArray.splice(sourceIndex, 1);

    const updatedArray = [
      ...childrenArray.slice(0, destinationIndex),
      movedItem,
      ...childrenArray.slice(destinationIndex + 1)
    ];

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
      clientX: parseFloat(
        window.getComputedStyle(draggedDOM.parentNode).paddingLeft
      )
    })
  }

  const getDraggedDom = (draggableId) => {
    const domQuery = `[${queryAttr}='${draggableId}']`
    const draggedDOM = document.querySelector(domQuery)
    return draggedDOM
  }


  return (
    <div className='App'>
      <Header1 />
      <section className='editor-container'>
        <DragDropContext onDragStart={handleDragStart} onDragUpdate={handleDragUpdate} onDragEnd={handleDragEnd}>
          <ComponentsList headers={headers} />
          <EditorDisplay pageContent={pageContent} placeholderProps={placeholderProps} getListStyle={getListStyle} getItemStyle={getItemStyle}/>
        </DragDropContext>
      </section>
    </div>
  )
}
