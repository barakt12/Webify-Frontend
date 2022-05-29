import { SidebarCloseBtn } from './sidebar-close-btn'
import { SidebarEdit } from './sidebar-edit'
import { SidebarBtns } from './sidebar-btns'
import { Droppable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react'
import { templateService } from '../../../../services/templates.service'
import { themeService } from '../../../../services/theme.service'
import { SidebarAdd } from './sidebar-add'
import { SidebarTheme } from './sidebar-theme'
import { useSelector } from 'react-redux'
import { DisplaySize } from './display-size-cmp'

export function EditorSidebar({ onSaveWap }) {
  const [isSidebarShown, toggleSidebarShown] = useState(true)
  const [addCmpList, setAddCmpList] = useState(null)
  const [themeList, setTheme] = useState(null)
  const [activeTab, setActiveTab] = useState('add')

  const selectedElement = useSelector(
    (storeState) => storeState.wapModule.selectedElement
  )

  useEffect(() => {
    if (activeTab) toggleSidebarShown(true)
    else toggleSidebarShown(false)
  }, [activeTab])

  useEffect(() => {
    setActiveTab('edit')
    toggleSidebarShown(true)
  }, [selectedElement])

  useEffect(() => {
    const cmps = templateService.getCmpsByCategory('header')
    setAddCmpList(cmps)
  }, [])

  useEffect(() => {
    if (!isSidebarShown) setActiveTab(null)
  }, [isSidebarShown])

  //change to one state
  const onChooseCmps = (category) => {
    setTheme(null)
    const cmps = templateService.getCmpsByCategory(category)
    console.log(cmps)
    setAddCmpList(cmps)
  }

  const onShowThemes = () => {
    setAddCmpList(null)
    const themes = themeService.getThemes()
    setTheme(themes)
  }

  return (
    <section
      className='editor-sidebar'
      style={{ backgroundColor: isSidebarShown ? '#252627' : '#0e1318' }}
    >
      <SidebarBtns
        onChooseCmps={onChooseCmps}
        onShowThemes={onShowThemes}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Droppable droppableId='hb5' isDropDisabled={true}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='sidebar-actions'
            style={{ width: isSidebarShown ? '270px' : '0px' }}
          >
            <DisplaySize />
            {activeTab === 'edit' && <SidebarEdit onSaveWap={onSaveWap} />}
            {activeTab === 'themes' && themeList && (
              <SidebarTheme themeList={themeList} />
            )}
            {activeTab === 'add' && addCmpList && (
              <SidebarAdd addCmpList={addCmpList} />
            )}
          </div>
        )}
      </Droppable>
      <SidebarCloseBtn
        toggleSidebarShown={toggleSidebarShown}
        isSidebarShown={isSidebarShown}
        setActiveTab={setActiveTab}
      />
    </section>
  )
}
