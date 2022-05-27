import { EditorSidebar } from './cmps/sidebar/editor-sidebar'
import { EditorBoard } from './cmps/editor-board'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
// import { wapService } from '../../services/wap-service'
import { templateService } from '../../services/templates.service'
import { themes } from '../../temaplates-example/themes/themes'
import { useDispatch } from 'react-redux'
import { setWap } from '../../store/wap/wap.action'

export function Editor() {
  const [pageContent, setPageContent] = useState({})
  const wap = useSelector((storeState) => storeState.wapModule.wap)
  const dispatch = useDispatch()

  useEffect(() => {
    setPageContent(wap)
  }, [wap])

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
      dispatch(setWap(newState))
      return newState
    })
  }

  const handleDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) return
    else if (result.destination.droppableId === 'editor' && result.source.droppableId !== 'editor') {
      addCmpToPage(result)
      return
    }

    const content = reorder(pageContent.cmps, result.source.index, result.destination.index)
    if (content) setPageContent((prevState) => ({ ...prevState, cmps: content }))
  }

  return (
    <section className="editor-container">
      <DragDropContext onDragEnd={handleDragEnd}>
        <EditorSidebar />
        <EditorBoard
          pageContent={pageContent}
          getItemStyle={getItemStyle}
        />
      </DragDropContext>
    </section>
  )
}
