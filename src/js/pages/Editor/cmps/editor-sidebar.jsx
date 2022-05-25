import { Draggable, Droppable } from 'react-beautiful-dnd'

export function EditorSidebar({ headers }) {
  return (
    <section className='components-list'>
      <h2>Components</h2>
      <Droppable droppableId='hb5' isDropDisabled={true}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='header-list'
          >
            {headers &&
              headers.map((headers, idx) => {
                return (
                  <Draggable
                    key={headers.id}
                    draggableId={headers.id}
                    index={idx}
                  >
                    {(provided,snapshot) => {
                      return (
                        <>                        
                        <img
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={headers.id}
                          className='mini-cmp'
                          src={headers.thumbnail}
                          alt=''
                        />
                        {snapshot.draggingOver ? <img
                          key={headers.id}
                          className ='mini-cmp copy-dnd'
                          src={headers.thumbnail}
                          alt='' />
                          : null }
                        </>
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
