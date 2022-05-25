import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import React from 'react'
export function SidebarBtns() {
  return (
    <div className='editor-edit-add-btns'>
      <button className='edit-btn'>Edit</button>
      <Accordion className='add-btn'>
        <AccordionSummary className='add-btn-summary'>
          <Typography>Add</Typography>
        </AccordionSummary>
        <AccordionDetails className='add-btn-details'>
          <Typography>Header</Typography>
        </AccordionDetails>
        <AccordionDetails className='add-btn-details'>
          <Typography>Section</Typography>
        </AccordionDetails>
        <AccordionDetails className='add-btn-details'>
          <Typography>Hero</Typography>
        </AccordionDetails>
        <AccordionDetails className='add-btn-details'>
          <Typography>Card</Typography>
        </AccordionDetails>
        <AccordionDetails className='add-btn-details'>
          <Typography>Text</Typography>
        </AccordionDetails>
        <AccordionDetails className='add-btn-details'>
          <Typography>Gallery</Typography>
        </AccordionDetails>
        <AccordionDetails className='add-btn-details'>
          <Typography>Footer</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
