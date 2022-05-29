import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import FormatPaintIcon from '@mui/icons-material/FormatPaint'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React, { useEffect, useState } from 'react'
export function SidebarBtns({
  onChooseCmps,
  onShowThemes,
  activeTab,
  setActiveTab,
}) {
  const [activeAddBtn, setActiveAddBtn] = useState('header')

  useEffect(() => {
    if (activeTab !== 'add') {
      setActiveAddBtn('header')
    }
  }, [activeTab])

  const onClickCmpBtn = async (ev, cmpName) => {
    await setActiveAddBtn(cmpName)
    if (ev.target.previousSibling)
      ev.target.previousSibling.classList.add('border-radius-previous')

    if (ev.target.nextSibling)
      ev.target.nextSibling.classList.add('border-radius-next')
    onChooseCmps(cmpName)
  }

  const onChangeTab = async (ev, tabName) => {
    if (activeTab === tabName) return
    await setActiveTab(tabName)
    if (ev.target.previousSibling)
      ev.target.previousSibling.classList.add('border-radius-previous')

    if (ev.target.nextSibling) {
      ev.target.nextSibling.classList.add('border-radius-next')
    }
  }
  return (
    <div className='editor-edit-add-btns'>
      <button
        className={`sidebar-btn edit-btn ${
          activeTab === 'edit' ? 'active' : ''
        }`}
        onClick={(ev) => onChangeTab(ev, 'edit')}
      >
        <EditIcon />
        Edit
      </button>
      <button
        className={`sidebar-btn themes-btn ${
          activeTab === 'themes' ? 'active' : ''
        }`}
        onClick={(ev) => {
          onChangeTab(ev, 'themes')
          onShowThemes()
        }}
      >
        <FormatPaintIcon />
        Themes
      </button>
      <Accordion
        expanded={activeTab === 'add'}
        className='sidebar-btn add-btn'
        onClick={(ev) => onChangeTab(ev, 'add')}
      >
        <AccordionSummary className={`add-btn-summary`}>
          <AddIcon style={{ fontSize: '1.8rem' }} />
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
            activeAddBtn === 'text' ? 'active' : ''
          }`}
          onClick={(ev) => onClickCmpBtn(ev, 'text')}
        >
          {' '}
          <Typography>Text</Typography>
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
            activeAddBtn === 'form' ? 'active' : ''
          }`}
          onClick={(ev) => onClickCmpBtn(ev, 'form')}
        >
          {' '}
          <Typography>Form</Typography>
        </AccordionDetails>
        <AccordionDetails
          className={`sidebar-btn add-btn-details ${
            activeAddBtn === 'video' ? 'active' : ''
          }`}
          onClick={(ev) => onClickCmpBtn(ev, 'video')}
        >
          {' '}
          <Typography>Video</Typography>
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
    </div>
  )
}
