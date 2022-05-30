import { AddCategories } from './add/add-categories'

import EditIcon from '@mui/icons-material/Edit'
import FormatPaintIcon from '@mui/icons-material/FormatPaint'

import React, { useEffect, useState } from 'react'
export function SidebarBtns({
  onChooseCmps,
  onShowThemes,
  activeTab,
  setActiveTab,
  isSidebarShown,
}) {
  const [activeAddBtn, setActiveAddBtn] = useState('header')

  useEffect(() => {
    if (activeTab !== 'add') {
      setActiveAddBtn('header')
    }
  }, [activeTab])

  const setDisplay = () => {
    if (!isSidebarShown && window.innerWidth < 700) return 'none'
    else return 'flex'
  }

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
    <div className='editor-edit-add-btns' style={{ display: setDisplay() }}>
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
      <AddCategories
        activeTab={activeTab}
        onChangeTab={onChangeTab}
        activeAddBtn={activeAddBtn}
        onClickCmpBtn={onClickCmpBtn}
      />
    </div>
  )
}
