import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
export function SidebarBtns({ onChooseCmps, onShowThemes }) {
  return (
    <div className="editor-edit-add-btns">
      <button className="edit-btn">Edit</button>
      <button className="edit-btn" onClick={() => onShowThemes()}>
        Themes
      </button>
      <Accordion className="add-btn">
        <AccordionSummary className="add-btn-summary">
          <Typography>Add</Typography>
        </AccordionSummary>
        <AccordionDetails className="add-btn-details">
          <Typography onClick={() => onChooseCmps('header')}>Header</Typography>
        </AccordionDetails>
        <AccordionDetails className="add-btn-details">
          <Typography onClick={() => onChooseCmps('section')}>Section</Typography>
        </AccordionDetails>
        <AccordionDetails className="add-btn-details">
          <Typography onClick={() => onChooseCmps('hero')}>Hero</Typography>
        </AccordionDetails>
        <AccordionDetails className="add-btn-details">
          <Typography onClick={() => onChooseCmps('card')}>Card</Typography>
        </AccordionDetails>
        <AccordionDetails className="add-btn-details">
          <Typography onClick={() => onChooseCmps('text')}>Text</Typography>
        </AccordionDetails>
        <AccordionDetails className="add-btn-details">
          <Typography onClick={() => onChooseCmps('gallery')}>Gallery</Typography>
        </AccordionDetails>
        <AccordionDetails className="add-btn-details">
          <Typography onClick={() => onChooseCmps('footer')}>Footer</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
