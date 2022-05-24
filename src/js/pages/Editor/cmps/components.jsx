import { Draggable, Droppable } from 'react-beautiful-dnd'

export const ComponentsList = ({ headers }) => {
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
            {headers &&
              headers.map((header, idx) => {
                return (
                  <Draggable
                    key={header.id}
                    draggableId={header.id}
                    index={idx}
                  >
                    {(provided) => {
                      return (
                        <img
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={header.id}
                          className='mini-cmp'
                          src={header.thumbnail}
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
