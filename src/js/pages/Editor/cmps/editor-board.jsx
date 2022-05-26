import { Draggable, Droppable } from 'react-beautiful-dnd'
import { DynamicCmp } from './dynamic-cmp/dynamic-cmp'
// import { setSelectedElement } from '../../../store/wap/wap.action'
import { useSelector } from 'react-redux'

export const EditorBoard = ({ pageContent }) => {
  const editorWidth = useSelector((storeState) => storeState.wapModule.displaySize)
  return (
    <>
      <Droppable droppableId="editor">
        {(provided, snapshot) => {
          return (
            <section
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="editor"
              style={{
                maxWidth: editorWidth,
                margin: 'auto',
                transition: 'max-width 0.3s',
              }}
            >
              {!pageContent?.cmps?.length ? (
                <p>Drag and Drop to add components</p>
              ) : (
                pageContent.cmps.map((cmp, index) => (
                  <Draggable key={cmp.id} draggableId={cmp.id + index} index={index}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <DynamicCmp cmp={cmp} />
                      </div>
                    )}
                  </Draggable>
                ))
              )}
            </section>
          )
        }}
      </Droppable>
    </>
  )
}
