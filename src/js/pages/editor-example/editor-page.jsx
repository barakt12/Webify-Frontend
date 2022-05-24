import { ComponentsList } from './components'
import { EditorDisplay } from './editor'
import { useEffect, useState } from 'react'
import { Header1 } from './templates/headers/header1'
import { service } from './service'
import { DragDropContext } from 'react-beautiful-dnd'

export function Editor() {
  const [headers, setHeaders] = useState(null)
  const [pageContent, setPageContent] = useState([])

  useEffect(() => {
    setHeaders(service.getHeaders())
  }, [])

  function addCmpToPage(dragInfo) {
    if (dragInfo.destination.droppableId !== 'editor') return

    const cmp = service.getCmpById(dragInfo.draggableId)
    setPageContent([...pageContent, cmp])
  }

  return (
    <div className="App">
      {/* <Header1 /> */}
      <section className="editor-container">
        <DragDropContext onDragEnd={(info) => addCmpToPage(info)}>
          <ComponentsList headers={headers} />
          <EditorDisplay pageContent={pageContent} />
        </DragDropContext>
      </section>
    </div>
  )
}
