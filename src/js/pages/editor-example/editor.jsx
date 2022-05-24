import { Droppable } from 'react-beautiful-dnd'
import { DynamicCmp } from './inner-cmps/dynamic-cmp'

export function EditorDisplay({ pageContent }) {
  console.log(pageContent)
  return (
    <section className="editor">
      <h2>Editor</h2>
      <Droppable droppableId="editor">
        {(provided) => {
          return (
            <div ref={provided.innerRef} {...provided.droppableProps} className="page-display">
              {!pageContent?.length && <span>Drag and Drop to add components</span>}
              {pageContent?.length && pageContent.map((cmp) => <DynamicCmp cmp={cmp} />)}
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
    </section>
  )
}
