import { Draggable, Droppable } from 'react-beautiful-dnd'
import { DynamicCmp } from '../cmps/dynamic-cmp'
// import { wapService } from '../../../services/wap-service'
import { isEmpty } from 'lodash'

export const EditorBoard = ({
  pageContent,
  placeholderProps,
  getListStyle,
  getItemStyle,
}) => {
  // const getCmpById = (type, id) => {
  //   return wapService.getCmpByIdAndType(type, id)
  // }

  return (
    <>
      <h2>Editor</h2>
      <Droppable droppableId='editor'>
        {(provided, snapshot) => {
          return (
            <section className='editor'>
              <div
                {...provided.droppableProps}
                style={getListStyle(snapshot.isDraggingOver)}
                ref={provided.innerRef}
                className='page-display'
              >
                {!pageContent?.cmps?.length && (
                  <span>Drag and Drop to add components</span>
                )}

                {pageContent?.cmps?.length &&
                  pageContent.cmps.map((cmp, index) => (
                    <Draggable
                      key={cmp.id}
                      draggableId={cmp.id + 'board'}
                      index={index}
                    >
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
                    </Draggable>
                  ))}
                {/* {provided.placeholder} */}
                {!isEmpty(placeholderProps) && snapshot.isDraggingOver && (
                  <div
                    className='placeholder'
                    style={{
                      top: placeholderProps.clientY,
                      left: placeholderProps.clientX,
                      height: placeholderProps.clientHeight,
                      width: placeholderProps.clientWidth,
                    }}
                  />
                )}
              </div>
            </section>
          )
        }}
      </Droppable>
    </>
  )
}
