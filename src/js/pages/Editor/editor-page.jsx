import { ComponentsList } from './cmps/components'
import { EditorDisplay } from './cmps/editor-board'
import { useEffect, useState } from 'react'
import { Header1 } from '../../templates-example/headers/header1'
import { DragDropContext } from 'react-beautiful-dnd'
import { wapService } from '../../services/wap-service'

export function Editor() {
  const [headers, setHeaders] = useState(null)
  const [pageContent, setPageContent] = useState([])

  useEffect(() => {
    setHeaders(wapService.getHeaders())
  }, [])

  function addCmpToPage(dragInfo) {
    if (dragInfo.destination.droppableId !== 'editor') return

    const cmp = wapService.getCmpById(dragInfo.draggableId)
    setPageContent([...pageContent, cmp])
  }

  return (
    <div className='App'>
      <Header1 />
      <section className='editor-container'>
        <DragDropContext onDragEnd={(info) => addCmpToPage(info)}>
          <ComponentsList headers={headers} />
          <EditorDisplay pageContent={pageContent} />
        </DragDropContext>
      </section>
    </div>
  )
}
