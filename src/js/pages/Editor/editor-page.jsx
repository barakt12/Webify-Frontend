import { ComponentsList } from './cmps/components'
import { EditorDisplay } from './cmps/editor-board'
import { useEffect, useState } from 'react'
import { Header1 } from '../../templates-example/headers/header1'
import { DragDropContext } from 'react-beautiful-dnd'
import { wapService } from '../../services/wap-service'

export function Editor() {
  const [headers, setHeaders] = useState(null)
  const [pageContent, setPageContent] = useState({
    _id: 'newId',
    type: 'wap',
    cmps: [],
  })

  useEffect(() => {
    setHeaders(wapService.getHeaders())
    setPageContent(wapService.getTemplate())
  }, [])

  function addCmpToPage(dragInfo) {
    if (dragInfo.destination.droppableId !== 'editor') return
    const cmp = wapService.getCmpById(dragInfo.draggableId)
    console.log(cmp)
    // setPageContent((prevState) => ({ ...prevState, cmps: [...prevState.cmps, cmp] }))
  }

  return (
    <div className="App">
      <section className="editor-container">
        <DragDropContext onDragEnd={(info) => addCmpToPage(info)}>
          <ComponentsList headers={headers} />
          <EditorDisplay pageContent={pageContent} />
        </DragDropContext>
      </section>
    </div>
  )
}
