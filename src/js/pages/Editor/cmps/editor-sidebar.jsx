import { Draggable, Droppable } from 'react-beautiful-dnd'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { useState } from 'react'

export function EditorSidebar({ elements }) {
  const [isSidebarShown, toggleSidebarShown] = useState(true)
  const [cmpList, setCmpList] = useState('header')
  // const [activeBtn, setActiveBtn] = useState(add)

  return (
    <section className='editor-sidebar'>
      <div className='editor-edit-add-btns'>
        <Accordion className='add-btn'>
          <AccordionSummary className='add-btn-summary'>
            <Typography>Add</Typography>
          </AccordionSummary>
          <AccordionDetails className='add-btn-details'>
            <Typography>Headers</Typography>
          </AccordionDetails>
        </Accordion>
        <button className='edit-btn'>Edit</button>
      </div>

      <Droppable droppableId='hb5' isDropDisabled={true}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='cmps-list'
          >
            {elements &&
              elements.map((elements, idx) => {
                return (
                  <Draggable
                    key={elements.id}
                    draggableId={elements.id}
                    index={idx}
                  >
                    {(provided, snapshot) => {
                      return (
                        <>
                          <img
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            key={elements.id}
                            className='mini-cmp'
                            src={elements.thumbnail}
                            alt=''
                          />
                          {snapshot.draggingOver ? (
                            <img
                              key={elements.id}
                              className='mini-cmp copy-dnd'
                              src={elements.thumbnail}
                              alt=''
                            />
                          ) : null}
                        </>
                      )
                    }}
                  </Draggable>
                )
              })}
          </div>
        )}
      </Droppable>

      {/* </div> */}
    </section>
  )
}
