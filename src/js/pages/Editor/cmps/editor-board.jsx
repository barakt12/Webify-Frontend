import { Draggable,Droppable } from 'react-beautiful-dnd'
import { DynamicCmp } from '../cmps/dynamic-cmp'
import { isEmpty } from "lodash";

export const EditorDisplay  = ({ pageContent,placeholderProps,getListStyle,getItemStyle }) => {
  console.log(pageContent)
  return (
    <section className='editor'>
      <h2>Editor</h2>
      <Droppable droppableId='editor'>
        {(provided,snapshot) => {
          return (
            <div
            {...provided.droppableProps}
            style={getListStyle(snapshot.isDraggingOver)}
              ref={provided.innerRef}
              className='page-display'
            >
              {!pageContent?.length && <span>Drag and Drop to add components</span>}

              {pageContent?.length &&
                pageContent.map((cmp,index) => (
                <Draggable key={cmp.id} draggableId={cmp.id + 'board'} index={index}>
                  {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                  <DynamicCmp cmp={cmp} />
                  </div>
                )}
                  </Draggable>)
                )}
              {provided.placeholder}
              {!isEmpty(placeholderProps) && snapshot.isDraggingOver && (
              <div
                className="placeholder"
                style={{
                  top: placeholderProps.clientY,
                  left: placeholderProps.clientX,
                  height: placeholderProps.clientHeight,
                  width: placeholderProps.clientWidth
                }}
              />
            )}
            </div>
          )
        }}
      </Droppable>
    </section>
  )
}
