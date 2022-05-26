import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
export function SidebarBtns({
  onChooseCmps,
  onShowThemes,
  activeTab,
  setActiveTab,
}) {
  const [activeAddBtn, setActiveAddBtn] = useState('header')

  const onClickCmpBtn = async (ev, cmpName) => {
    await setActiveAddBtn(cmpName)
    if (ev.target.previousSibling)
      ev.target.previousSibling.classList.add('border-radius-previous')
    if (ev.target.nextSibling)
      ev.target.nextSibling.classList.add('border-radius-next')
    onChooseCmps(cmpName)
  }

  const onChangeTab = (tabName) => {
    setActiveTab(tabName)
  }
  return (
    <div className='editor-edit-add-btns'>
      <button
        className={`edit-btn ${activeTab === 'edit' ? 'active' : ''}`}
        onClick={() => onChangeTab('edit')}
      >
        Edit
      </button>
      <button
        className={`themes-btn ${activeTab === 'themes' ? 'active' : ''}`}
        onClick={() => {
          onChangeTab('themes')
          onShowThemes()
        }}
      >
        Themes
      </button>
      <Accordion
        expanded={activeTab === 'add'}
        className='add-btn'
        onClick={() => onChangeTab('add')}
      >
        <AccordionSummary className={`add-btn-summary`}>
          <Typography>Add</Typography>
        </AccordionSummary>
        <AccordionDetails
          className={`add-btn-details ${
            activeAddBtn === 'header' ? 'active' : ''
          }`}
          onClick={(ev) => onClickCmpBtn(ev, 'header')}
        >
          <Typography>Header</Typography>
        </AccordionDetails>
        <AccordionDetails
          className={`add-btn-details ${
            activeAddBtn === 'section' ? 'active' : ''
          }`}
          onClick={(ev) => onClickCmpBtn(ev, 'section')}
        >
          {' '}
          <Typography>Section</Typography>
        </AccordionDetails>
        <AccordionDetails
          className={`add-btn-details ${
            activeAddBtn === 'hero' ? 'active' : ''
          }`}
          onClick={(ev) => onClickCmpBtn(ev, 'hero')}
        >
          {' '}
          <Typography>Hero</Typography>
        </AccordionDetails>
        <AccordionDetails
          className={`add-btn-details ${
            activeAddBtn === 'card' ? 'active' : ''
          }`}
          onClick={(ev) => onClickCmpBtn(ev, 'card')}
        >
          {' '}
          <Typography>Card</Typography>
        </AccordionDetails>
        <AccordionDetails
          className={`add-btn-details ${
            activeAddBtn === 'text' ? 'active' : ''
          }`}
          onClick={(ev) => onClickCmpBtn(ev, 'text')}
        >
          {' '}
          <Typography>Text</Typography>
        </AccordionDetails>
        <AccordionDetails
          className={`add-btn-details ${
            activeAddBtn === 'gallery' ? 'active' : ''
          }`}
          onClick={(ev) => onClickCmpBtn(ev, 'gallery')}
        >
          {' '}
          <Typography>Gallery</Typography>
        </AccordionDetails>
        <AccordionDetails
          className={`add-btn-details ${
            activeAddBtn === 'footer' ? 'active' : ''
          }`}
          onClick={(ev) => onClickCmpBtn(ev, 'header')}
        >
          {' '}
          <Typography>Footer</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
