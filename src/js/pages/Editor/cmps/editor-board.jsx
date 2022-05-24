import { Droppable } from 'react-beautiful-dnd'
import { DynamicCmp } from '../cmps/dynamic-cmp'
import { wapService } from '../../../services/wap-service'

export function EditorDisplay({ pageContent }) {
  console.log(pageContent)

  const getCmpById = (type, id) => {
    return wapService.getCmpByIdAndType(type, id)
  }

  return (
    <section className="editor">
      <h2>Editor</h2>
      <Droppable droppableId="editor">
        {(provided) => {
          return (
            <div ref={provided.innerRef} {...provided.droppableProps} className="page-display">
              {!pageContent?.cmps?.length && <span>Drag and Drop to add components</span>}
              {pageContent?.cmps?.length && pageContent.cmps.map((cmp) => <DynamicCmp cmp={getCmpById(cmp.type, cmp.id)} />)}
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
    </section>
  )
}
