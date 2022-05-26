import { EditorSidebar } from './cmps/editor-sidebar'
import { EditorBoard } from './cmps/editor-board'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
// import { wapService } from '../../services/wap-service'
import { templateService } from '../../services/templates.service'
import { themes } from '../../temaplates-example/themes/themes'
import { useDispatch } from 'react-redux'
import { updateWap } from '../../store/wap/wap.action'

export function Editor() {
  const [placeholderProps, setPlaceholderProps] = useState({})
  const [pageContent, setPageContent] = useState({})

  const wap = useSelector((storeState) => storeState.wapModule.wap)
  const dispatch = useDispatch()

  useEffect(() => {
    setPageContent(wap)
    return () => {
      // dispatch(updateWap(null))
    }
  }, [])

  const onSelectTheme = (theme) => {
    console.log('on select theme')
    setTheme(wap, theme)
  }

  const setTheme = (wap, themeColors) => {
    console.log('wap to change theme', wap)
    wap.cmps.forEach((cmp) => {
      console.log('cmp to set style',cmp)
      cmp.style = { ...cmp.style, ...themeColors[cmp.themePalette] }
    })
    dispatch(updateWap(wap))
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    ...draggableStyle,
  })

  const addCmpToPage = (result) => {
    const cmp = templateService.getCmpById(result.draggableId)
    setPageContent((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState))
      newState.cmps.splice(result.destination.index, 0, cmp)
      dispatch(updateWap(newState))
      return newState
    })
  }

  const handleDragEnd = (result) => {
    // setPlaceholderProps({})
    // dropped outside the list
    if (!result.destination) return
    else if (
      result.destination.droppableId === 'editor' &&
      result.source.droppableId !== 'editor'
    ) {
      addCmpToPage(result)
      return
    }

    const content = reorder(
      pageContent.cmps,
      result.source.index,
      result.destination.index
    )
    if (content)
      setPageContent((prevState) => ({ ...prevState, cmps: content }))
  }

  return (
    <section className="editor-container">
      <DragDropContext onDragEnd={handleDragEnd}>
        <EditorSidebar onSelectTheme={onSelectTheme} />
        <EditorBoard
          pageContent={pageContent}
          // getListStyle={getListStyle}
          getItemStyle={getItemStyle}
        />
      </DragDropContext>
    </section>
  )
}
