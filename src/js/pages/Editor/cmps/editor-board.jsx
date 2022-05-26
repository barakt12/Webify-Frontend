import { Draggable, Droppable } from 'react-beautiful-dnd'
import { DynamicCmp } from '../cmps/dynamic-cmp'
import { isEmpty } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

export const EditorBoard = ({ pageContent, placeholderProps, getItemStyle }) => {
  return (
    <>
      <Droppable droppableId="editor">
        {(provided, snapshot) => {
          return (
            <section {...provided.droppableProps} ref={provided.innerRef} className="editor">
              {!pageContent?.cmps?.length && <span>Drag and Drop to add components</span>}

              {pageContent?.cmps?.length &&
                pageContent.cmps.map((cmp, index) => (
                  <Draggable key={cmp.id} draggableId={cmp.id + index} index={index}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                        <DynamicCmp cmp={cmp} />
                      </div>
                    )}
                  </Draggable>
                ))}
              {!isEmpty(placeholderProps) && snapshot.isDraggingOver && (
                <div
                  className="placeholder"
                  style={{
                    top: placeholderProps.clientY,
                    left: placeholderProps.clientX,
                    height: placeholderProps.clientHeight,
                    width: placeholderProps.clientWidth,
                  }}
                />
              )}
            </section>
          )
        }}
      </Droppable>
    </>
  )
}
