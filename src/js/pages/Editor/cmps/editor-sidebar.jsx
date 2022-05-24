import { Draggable, Droppable } from 'react-beautiful-dnd'

export function EditorSidebar({ templates }) {
  return (
    <section className='components-list'>
      <h2>Components</h2>
      <Droppable droppableId='hb5'>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='header-list'
          >
            {templates &&
              templates.map((templates, idx) => {
                return (
                  <Draggable
                    key={templates.id}
                    draggableId={templates.id}
                    index={idx}
                  >
                    {(provided) => {
                      return (
                        <img
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={templates.id}
                          className='mini-cmp'
                          src={templates.thumbnail}
                          alt=''
                        />
                      )
                    }}
                  </Draggable>
                )
              })}
          </div>
        )}
      </Droppable>
    </section>
  )
}
