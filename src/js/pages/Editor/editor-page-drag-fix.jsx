// import { EditorSidebar } from './cmps/editor-sidebar'
// import { EditorBoard } from './cmps/editor-board'
// import { useEffect, useState } from 'react'

// import { DragDropContext } from 'react-beautiful-dnd'
// import { wapService } from '../../services/wap-service'

// export function Editor() {
//   const [placeholderProps, setPlaceholderProps] = useState({})
//   const [headers, setHeaders] = useState(null)
//   const [pageContent, setPageContent] = useState({
//     'newId': []
//     // type: 'wap',
//   })

//   useEffect(() => {
//     setHeaders(wapService.getTemplates())
//     setPageContent(wapService.getTemplate())
//   }, [])

//   const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list)
//     const [removed] = result.splice(startIndex, 1)
//     result.splice(endIndex, 0, removed)

//     return result
//   }

// // Moves an item from one list to another list.

// const copy = (source, destination, droppableSource, droppableDestination) => {
//   console.log('==> dest', destination);

//   const sourceClone = Array.from(source);
//   const destClone = Array.from(destination);
//   const item = sourceClone[droppableSource.index];

//   destClone.splice(droppableDestination.index, 0, { ...item, id: 'newTestingId' });
//   return destClone;
// };

// const move = (source, destination, droppableSource, droppableDestination) => {
//   const sourceClone = Array.from(source);
//   const destClone = Array.from(destination);
//   const [removed] = sourceClone.splice(droppableSource.index, 1);

//   destClone.splice(droppableDestination.index, 0, removed);

//   const result = {};
//   result[droppableSource.droppableId] = sourceClone;
//   result[droppableDestination.droppableId] = destClone;

//   return result;
// };

//   const getItemStyle = (isDragging, draggableStyle) => ({
//     // some basic styles to make the items look a bit nicer
//     userSelect: 'none',
//     //if we need margin or padding on that container use that
//     // padding: grid * 2,
//     // margin: `0 0 ${grid}px 0`,

//     // change background colour if dragging
//     background: isDragging ? 'lightgreen' : 'grey',

//     // styles we need to apply on draggables
//     ...draggableStyle,
//   })

//   const getListStyle = (isDraggingOver) => ({
//     // background: isDraggingOver ? 'lightblue' : 'lightgrey',
//     padding: '5px',
//     // marginRight: '10px',
//     width: '100%',
//     position: 'relative',
//   })

//    const onDragEnd = (result) => {
//         const { source, destination } = result;

//         console.log('==> result', result);

//         // dropped outside the list
//         if (!destination) {
//             return;
//         }

//         switch (source.droppableId) {
//             case destination.droppableId:
//                 this.setState({
//                     [destination.droppableId]: reorder(
//                         this.state[source.droppableId],
//                         source.index,
//                         destination.index
//                     )
//                 });
//                 break;
//             case 'hb5':
//                 this.setState({
//                     [destination.droppableId]: copy(
//                         ITEMS,
//                         this.state[destination.droppableId],
//                         source,
//                         destination
//                     )
//                 });
//                 break;
//             default:
//                 this.setState(
//                     move(
//                         this.state[source.droppableId],
//                         this.state[destination.droppableId],
//                         source,
//                         destination
//                     )
//                 );
//                 break;
//         }
//     };

//   return (
//     <div className='App'>
//       <section className='editor-container'>
//         <DragDropContext onDragEnd={handleDragEnd} >
//           <EditorSidebar headers={headers} />
//           <EditorBoard
//             pageContent={pageContent}
//             placeholderProps={placeholderProps}
//             getListStyle={getListStyle}
//             getItemStyle={getItemStyle}
//           />
//         </DragDropContext>
//       </section>
//     </div>
//   )
// }
