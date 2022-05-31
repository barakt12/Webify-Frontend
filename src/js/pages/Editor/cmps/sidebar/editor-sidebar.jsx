import { toggleSave } from '../../../../store/system/system.action'

import SaveIcon from '@mui/icons-material/Save'
import CloudDoneIcon from '@mui/icons-material/CloudDone'
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
  const dispatch = useDispatch()

  const selectedElement = useSelector(
    (storeState) => storeState.wapModule.selectedElement
  )

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

  //change to one state
  const onChooseCmps = (category) => {
    setTheme(null)
    const cmps = templateService.getCmpsByCategory(category)
    setAddCmpList(cmps)
  }

  const onShowThemes = () => {
    setAddCmpList(null)
    const themes = themeService.getThemes()
    console.log('themes', themes)
    setTheme(themes)
  }

  const onSaveWap = () => {
    dispatch(toggleSave())
  }

  const setWidth = () => {
    if (isSidebarShown && window.innerWidth > 700) return '270px'
    else if (isSidebarShown && window.innerWidth < 700) return '100%'
    else if (!isSidebarShown && window.innerWidth < 700) return '100%'
    else {
      return '0px'
    }
  }

  const setHeight = () => {
    if (window.innerWidth > 700) return '100%'
    else if (isSidebarShown && window.innerWidth < 700) return '40%'
    else if (!isSidebarShown && window.innerWidth < 700) return '0'
    else {
      return '100%'
    }
  }

  return (
    <section
      className='editor-sidebar'
      style={{
        backgroundColor: isSidebarShown ? '#252627' : '#0e1318',
        height: setHeight(),
      }}
    >
      <SidebarBtns
        onChooseCmps={onChooseCmps}
        onShowThemes={onShowThemes}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarShown={isSidebarShown}
      />
      <Droppable droppableId='hb5' isDropDisabled={true}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='sidebar-actions'
            style={{
              width: setWidth(),
              // width:
              //   isSidebarShown && window.innerWidth > 700 ? '270px' : '0px',
              // width: isSidebarShown && window.innerWidth < 700 ? '100%' : '0px',
              padding:
                activeTab === 'add' && window.innerWidth > 700
                  ? '0 6px 0px 6px'
                  : '',
              marginTop:
                activeTab === 'add' && window.innerWidth < 700 ? '55px' : '',
            }}
          >
            <DisplaySize />
            <div className='action-btns'>
              <button onClick={onSaveWap}>
                <SaveIcon />
                <span>Save</span>
              </button>
              <button>
                <CloudDoneIcon />
                <span>Publish</span>
              </button>
            </div>
            {activeTab === 'edit' && <SidebarEdit />}
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
