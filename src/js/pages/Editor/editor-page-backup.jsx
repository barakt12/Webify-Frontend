import { EditorSidebar } from './cmps/editor-sidebar'
import { EditorBoard } from './cmps/editor-board'
import { useEffect, useState } from 'react'

import { DragDropContext } from 'react-beautiful-dnd'
import { wapService } from '../../services/wap-service'

export function Editor() {
  const [placeholderProps, setPlaceholderProps] = useState({})
  const [headers, setHeaders] = useState(null)
  const [pageContent, setPageContent] = useState({
    'newId': []
    // type: 'wap',
  })

  useEffect(() => {
    setHeaders(wapService.getTemplates())
    setPageContent(wapService.getTemplate())
  }, [])

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

// Moves an item from one list to another list.
 
const copy = (source, destination, droppableSource, droppableDestination) => {
    console.log('==> dest', destination);

    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];

    destClone.splice(droppableDestination.index, 0, { ...item, id: 'test123' });
    return destClone;
}

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    //if we need margin or padding on that container use that
    // padding: grid * 2,
    // margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
  })

  const getListStyle = (isDraggingOver) => ({
    // background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: '5px',
    // marginRight: '10px',
    width: '100%',
    position: 'relative',
  })


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
    const { source, destination } = result;

    console.log('==> result', result);

    // dropped outside the list
    if (!destination) return

    switch (source.droppableId) {
      //if user is sorting inside the editor - just reorder
        case destination.droppableId:
          setPageContent({
            'newId': reorder(
                    source.droppableId,
                    source.index,
                    destination.index
                )
            });
            break;
        case 'hb5':
          //if user dragged header and did not place it anywhere.
           setHeaders(
            copy(
                    headers,
                    destination.droppableId,
                    source,
                    destination
                )
            );
            break;
        default:
          //move dragged item to editor
          addCmpToPage(result)
            break;
    }
};
  return (
    <div className='App'>
      <section className='editor-container'>
        <DragDropContext onDragEnd={handleDragEnd} >
          <EditorSidebar headers={headers} />
          <EditorBoard
            pageContent={pageContent}
            placeholderProps={placeholderProps}
            getListStyle={getListStyle}
            getItemStyle={getItemStyle}
          />
        </DragDropContext>
      </section>
    </div>
  )
}
