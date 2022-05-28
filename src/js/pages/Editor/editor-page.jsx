import { EditorSidebar } from './cmps/sidebar/editor-sidebar'
import { EditorBoard } from './cmps/editor-board'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import { templateService } from '../../services/templates.service'
import { v4 as uuidv4 } from 'uuid'
import { themes } from '../../temaplates-example/themes/themes'
import { useDispatch } from 'react-redux'
import { setWap, saveWap } from '../../store/wap/wap.action'
import { wapService } from '../../services/wap-service'

export function Editor() {
  const [pageContent, setPageContent] = useState({})
  const [isSaving, setIsSaving] = useState(false)
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
    let cmp = templateService.getCmpById(result.draggableId)
    cmp = JSON.parse(JSON.stringify(cmp))
    cmp.id = uuidv4()
    wapService.changeCmpId(cmp)
    setPageContent((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState))
      newState.cmps.splice(result.destination.index, 0, cmp)
      dispatch(setWap(newState))
    })
  }

  const handleDragStart = () => {
    console.log('drag')
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

  const onSaveWap = async () => {
    setIsSaving(true)
    await dispatch(saveWap())
    setIsSaving(false)
  }

  return (
    <section className="editor-container">
      <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <EditorSidebar onSaveWap={onSaveWap} />
        <EditorBoard pageContent={pageContent} getItemStyle={getItemStyle} isSaving={isSaving} />
      </DragDropContext>
    </section>
  )
}
