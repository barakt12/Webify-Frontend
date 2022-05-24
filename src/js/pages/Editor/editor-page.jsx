import { EditorSidebar } from './cmps/editor-sidebar'
import { EditorBoard } from './cmps/editor-board'
import { useEffect, useState } from 'react'

import { DragDropContext } from 'react-beautiful-dnd'
import { wapService } from '../../services/wap-service'

export function Editor() {
  const [templates, setTemplates] = useState(null)
  const [pageContent, setPageContent] = useState([])

  useEffect(() => {
    setTemplates(wapService.getTemplates())
  }, [])

  function addCmpToPage(dragInfo) {
    if (dragInfo.destination.droppableId !== 'editor') return

    const cmp = wapService.getCmpById(dragInfo.draggableId)
    setPageContent([...pageContent, cmp])
  }

  const onDragStart = (info) => {
    console.log(info)
    if (info.draggableId === 'h101' && info.source?.droppableId === 'hb5') {
      return
    }
  }

  return (
    <div className='App'>
      <section className='editor-container'>
        <DragDropContext
          onDragEnd={(info) => addCmpToPage(info)}
          onDragStart={onDragStart}
        >
          <EditorSidebar templates={templates} />
          <EditorBoard pageContent={pageContent} />
        </DragDropContext>
      </section>
    </div>
  )
}
