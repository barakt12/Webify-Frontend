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

export function EditorSidebar() {
  const [isSidebarShown, toggleSidebarShown] = useState(false)
  const [addCmpList, setAddCmpList] = useState(null)
  const [themeList, setTheme] = useState(null)
  const [activeTab, setActiveTab] = useState('add')

  const selectedElement = useSelector(
    (storeState) => storeState.wapModule.selectedElement
  )

  useEffect(() => {
    setActiveTab('edit')
  }, [selectedElement])

  useEffect(() => {
    const cmps = templateService.getCmpsByCategory('header')
    setAddCmpList(cmps)
  }, [])

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

  return (
    <section className='editor-sidebar'>
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
            className='cmps-list'
            style={{ width: isSidebarShown ? '270px' : '0px' }}
          >
            {activeTab === 'add' && addCmpList && (
              <SidebarAdd addCmpList={addCmpList} />
            )}
            {activeTab === 'themes' && themeList && (
              <SidebarTheme themeList={themeList} />
            )}
            {activeTab === 'edit' && <SidebarEdit />}
          </div>
        )}
      </Droppable>
      <SidebarCloseBtn
        toggleSidebarShown={toggleSidebarShown}
        isSidebarShown={isSidebarShown}
      />
    </section>
  )
}
