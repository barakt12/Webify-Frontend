import { Draggable, Droppable } from 'react-beautiful-dnd'
import { DynamicCmp } from './dynamic-cmp/dynamic-cmp'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'
import { setWapThumbnail } from '../../../store/wap/wap.action'

export const EditorBoard = ({ pageContent, isSaving }) => {
  const dispatch = useDispatch()

  const editorWidth = useSelector((storeState) => storeState.wapModule.displaySize)
  const editorRef = useRef(null)

  useEffect(() => {
    if (isSaving) {
      exportAsImage()
    }
  }, [isSaving])

  const exportAsImage = async (el, imageFileName) => {
    const canvas = await html2canvas(editorRef.current, {})
    const image = canvas.toDataURL('image/png', 1.0)
    dispatch(setWapThumbnail(image))
  }

  return (
    <div ref={editorRef} className="editor-inner-container">
      <Droppable droppableId="editor">
        {(provided, snapshot) => {
          return (
            <section
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="editor"
              style={{
                maxWidth: editorWidth,
                margin: 'auto',
                transition: 'max-width 0.3s',
              }}
            >
              {!pageContent?.cmps?.length ? (
                <p>Drag and Drop to add components</p>
              ) : (
                pageContent.cmps.map((cmp, index) => (
                  <Draggable key={cmp.id} draggableId={cmp.id + index} index={index}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <DynamicCmp cmp={cmp} />
                      </div>
                    )}
                  </Draggable>
                ))
              )}
            </section>
          )
        }}
      </Droppable>
    </div>
  )
}
