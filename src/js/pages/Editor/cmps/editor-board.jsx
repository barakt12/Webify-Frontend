import { Draggable, Droppable } from 'react-beautiful-dnd'
import { DynamicCmp } from './dynamic-cmp/dynamic-cmp'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { setWapThumbnail, saveWap } from '../../../store/wap/wap.action'
import { toggleSave } from '../../../store/system/system.action'
import { createJpegFromElement } from '../../../services/cloudinary.service'
import { wapTemplate4 } from '../../../temaplates-example/wap-template-4'

export const EditorBoard = ({ wap }) => {
  const dispatch = useDispatch()
  const editorWidth = useSelector((storeState) => storeState.wapModule.displaySize)
  const { isSaving } = useSelector((storeState) => storeState.systemModule)
  const editorRef = useRef(null)

  useEffect(() => {
    if (isSaving) {
      saveWapWithThumbnail()
    }
  }, [isSaving])

  const saveWapWithThumbnail = async () => {
    console.log('SAVING...')
    const elBoard = document.querySelector('.editor-inner-container')
    const thumbnailUrl = await createJpegFromElement(elBoard, elBoard.clientWidth, elBoard.clientHeight)
    dispatch(setWapThumbnail(thumbnailUrl))
    dispatch(saveWap())
    dispatch(toggleSave())
  }

  return (
    <div
      ref={editorRef}
      style={{
        maxWidth: editorWidth,
        margin: '0 auto',
        transition: 'max-width 0.3s',
      }}
      className="editor-inner-container"
    >
      <Droppable droppableId="editor">
        {(provided, snapshot) => {
          return (
            <section {...provided.droppableProps} ref={provided.innerRef} className="editor">
              {!wapTemplate4?.cmps?.length ? (
                <h2>Drag and Drop to add components</h2>
              ) : (
                wapTemplate4.cmps.map((cmp, index) => (
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
