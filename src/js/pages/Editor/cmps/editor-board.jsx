import { Draggable, Droppable } from 'react-beautiful-dnd'
import { DynamicCmp } from './dynamic-cmp/dynamic-cmp'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { setWapThumbnail, saveWap } from '../../../store/wap/wap.action'
import { toggleSave } from '../../../store/system/system.action'
import { toJpeg } from 'html-to-image'

export const EditorBoard = ({ wap }) => {
  const dispatch = useDispatch()
  const editorWidth = useSelector((storeState) => storeState.wapModule.displaySize)
  const { isSaving } = useSelector((storeState) => storeState.systemModule)
  const editorRef = useRef(null)

  useEffect(() => {
    if (isSaving) {
      exportAsImage(editorRef.current, editorRef.current.clientWidth, editorRef.current.clientHeight)
    }
  }, [isSaving])

  const exportAsImage = async (element, width, height) => {
    console.log('SAVING...')
    const dataUrl = await toJpeg(element, { width, height })
    dispatch(setWapThumbnail(dataUrl))
    dispatch(saveWap())
    dispatch(toggleSave())
  }

  return (
    <div
      ref={editorRef}
      style={{
        maxWidth: editorWidth,
        margin: 'auto',
        transition: 'max-width 0.3s',
      }}
      className="editor-inner-container"
    >
      <Droppable droppableId="editor">
        {(provided, snapshot) => {
          return (
            <section {...provided.droppableProps} ref={provided.innerRef} className="editor">
              {!wap?.cmps?.length ? (
                <p>Drag and Drop to add components</p>
              ) : (
                wap.cmps.map((cmp, index) => (
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
