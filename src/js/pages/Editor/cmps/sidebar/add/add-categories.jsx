import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
export function AddCategories({
  activeTab,
  ev,
  onChangeTab,
  activeAddBtn,
  onClickCmpBtn,
}) {
  return (
    <Accordion
      expanded={activeTab === 'add'}
      className='sidebar-btn add-btn'
      onClick={(ev) => onChangeTab(ev, 'add')}
    >
      <AccordionSummary className={`add-btn-summary`}>
        <AddIcon
          style={{
            fontSize: '1.8rem',
          }}
        />
        <Typography>Add</Typography>
        <ExpandMoreIcon
          className='sidebar-btn'
          style={{
            fontSize: '14px',
            position: 'absolute',
            bottom: 0,
            transform: activeTab === 'add' ? 'scale(-1)' : '',
            transition: '0.2s',
          }}
        />
      </AccordionSummary>
      <AccordionDetails
        className={`sidebar-btn add-btn-details ${
          activeAddBtn === 'header' ? 'active' : ''
        }`}
        onClick={(ev) => onClickCmpBtn(ev, 'header')}
      >
        <Typography>Header</Typography>
      </AccordionDetails>
      <AccordionDetails
        className={`sidebar-btn add-btn-details ${
          activeAddBtn === 'section' ? 'active' : ''
        }`}
        onClick={(ev) => onClickCmpBtn(ev, 'section')}
      >
        {' '}
        <Typography>Section</Typography>
      </AccordionDetails>
      <AccordionDetails
        className={`sidebar-btn add-btn-details ${
          activeAddBtn === 'hero' ? 'active' : ''
        }`}
        onClick={(ev) => onClickCmpBtn(ev, 'hero')}
      >
        {' '}
        <Typography>Hero</Typography>
      </AccordionDetails>
      <AccordionDetails
        className={`sidebar-btn add-btn-details ${
          activeAddBtn === 'card' ? 'active' : ''
        }`}
        onClick={(ev) => onClickCmpBtn(ev, 'card')}
      >
        {' '}
        <Typography>Card</Typography>
      </AccordionDetails>

      <AccordionDetails
        className={`sidebar-btn add-btn-details ${
          activeAddBtn === 'gallery' ? 'active' : ''
        }`}
        onClick={(ev) => onClickCmpBtn(ev, 'gallery')}
      >
        {' '}
        <Typography>Gallery</Typography>
      </AccordionDetails>
      <AccordionDetails
        className={`sidebar-btn add-btn-details ${
          activeAddBtn === 'map' ? 'active' : ''
        }`}
        onClick={(ev) => onClickCmpBtn(ev, 'map')}
      >
        {' '}
        <Typography>Map</Typography>
      </AccordionDetails>
      <AccordionDetails
        className={`sidebar-btn add-btn-details ${
          activeAddBtn === 'form' ? 'active' : ''
        }`}
        onClick={(ev) => onClickCmpBtn(ev, 'form')}
      >
        {' '}
        <Typography>Form</Typography>
      </AccordionDetails>
      <AccordionDetails
        className={`sidebar-btn add-btn-details ${
          activeAddBtn === 'footer' ? 'active' : ''
        }`}
        onClick={(ev) => onClickCmpBtn(ev, 'footer')}
      >
        {' '}
        <Typography>Footer</Typography>
      </AccordionDetails>
    </Accordion>
  )
}
