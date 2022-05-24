import { Droppable } from 'react-beautiful-dnd'
import { DynamicCmp } from '../cmps/dynamic-cmp'

export function EditorBoard({ pageContent }) {
  return (
    <Droppable droppableId='editor'>
      {(provided) => {
        return (
          <section
            className='editor'
            style={{ marginTop: '30px' }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {!pageContent?.length ? (
              <span>Drag and Drop to add components</span>
            ) : (
              pageContent.map((cmp) => <DynamicCmp cmp={cmp} key={cmp.id} />)
            )}
            {provided.placeholder}
          </section>
        )
      }}
    </Droppable>
  )
}
