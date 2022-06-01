import { SavePublishBtns } from './save-publish-btns'
import { toggleSave } from '../../../../store/system/system.action'
import { publishWap } from '../../../../store/wap/wap.action'
import { SidebarCloseBtn } from './sidebar-close-btn'
import { SidebarEdit } from './edit/sidebar-edit'
import { SidebarBtns } from './sidebar-btns'
import { Droppable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react'
import { templateService } from '../../../../services/templates.service'
import { themeService } from '../../../../services/theme.service'
import { SidebarAdd } from './add/sidebar-add-list'
import { SidebarTheme } from './theme/sidebar-theme'
import { useSelector, useDispatch } from 'react-redux'
import { DisplaySize } from './display-size-btns'

export function EditorSidebar() {
  const [isSidebarShown, toggleSidebarShown] = useState(true)
  const [addCmpList, setAddCmpList] = useState(null)
  const [themeList, setTheme] = useState(null)
  const [activeTab, setActiveTab] = useState('add')
  const [dimensions, setDimensions] = useState(null)
  const dispatch = useDispatch()

  const selectedElement = useSelector((storeState) => storeState.wapModule.selectedElement)

  useEffect(() => {
    if (activeTab) toggleSidebarShown(true)
    if (activeTab === 'add') {
      const cmps = templateService.getCmpsByCategory('header')
      setAddCmpList(cmps)
    } else if (!activeTab) toggleSidebarShown(false)
  }, [activeTab])

  useEffect(() => {
    setActiveTab('edit')
    toggleSidebarShown(true)
  }, [selectedElement])

  useEffect(() => {
    if (!isSidebarShown) setActiveTab(null)
  }, [isSidebarShown])

  useEffect(() => {
    // used for repositioning save-publish btns
    window.addEventListener('resize', () => setDimensions(window.innerWidth))
    return () => {
      window.removeEventListener('resize', setDimensions)
    }
  })

  //change to one state
  const onChooseCmps = (category) => {
    setTheme(null)
    const cmps = templateService.getCmpsByCategory(category)
    setAddCmpList(cmps)
  }

  const onShowThemes = () => {
    setAddCmpList(null)
    const themes = themeService.getThemes()
    setTheme(themes)
  }

  const onSaveWap = () => {
    dispatch(toggleSave())
  }

  const onPublishWap = () => {
    dispatch(publishWap())
  }

  return (
    <section
      className={`editor-sidebar ${isSidebarShown ? '' : 'closed'}`}
      style={{
        backgroundColor: isSidebarShown ? '#252627' : '#0e1318',
      }}
    >
      <SidebarBtns onChooseCmps={onChooseCmps} onShowThemes={onShowThemes} activeTab={activeTab} setActiveTab={setActiveTab} isSidebarShown={isSidebarShown} />
      <Droppable droppableId="hb5" isDropDisabled={true}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`sidebar-actions ${isSidebarShown ? '' : 'closed'}`}
            style={{
              padding: activeTab === 'add' && window.innerWidth > 700 ? '0 6px 0px 6px' : '',
              marginTop: activeTab === 'add' && window.innerWidth < 700 ? '55px' : '',
            }}
          >
            <DisplaySize />
            {dimensions < 700 && <SavePublishBtns onSaveWap={onSaveWap} />}
            {activeTab === 'edit' && <SidebarEdit />}
            {activeTab === 'themes' && themeList && <SidebarTheme themeList={themeList} />}

            {activeTab === 'add' && addCmpList && <SidebarAdd addCmpList={addCmpList} />}
            {dimensions > 700 && <SavePublishBtns onSaveWap={onSaveWap} onPublishWap={onPublishWap} />}
          </div>
        )}
      </Droppable>
      <SidebarCloseBtn toggleSidebarShown={toggleSidebarShown} isSidebarShown={isSidebarShown} setActiveTab={setActiveTab} />
    </section>
  )
}
