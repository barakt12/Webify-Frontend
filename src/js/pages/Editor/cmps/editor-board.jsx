import { Draggable, Droppable } from 'react-beautiful-dnd'
import { DynamicCmp } from './dynamic-cmp/dynamic-cmp'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import {
  setWapThumbnail,
  saveWap,
  publishWap,
} from '../../../store/wap/wap.action'

import { createJpegFromElement } from '../../../services/cloudinary.service'
import { Loader } from '../../../cmps/loader'
import { togglePublish, toggleSave } from '../../../store/system/system.action'

export const EditorBoard = ({ wap }) => {
  const dispatch = useDispatch()
  const editorWidth = useSelector(
    (storeState) => storeState.wapModule.displaySize
  )
  const { isSaving } = useSelector((storeState) => storeState.systemModule)
  const { isPublishing } = useSelector((storeState) => storeState.systemModule)
  const editorRef = useRef(null)

  useEffect(() => {
    if (isSaving) {
      saveWapWithThumbnail(false)
    } else if (isPublishing) {
      saveWapWithThumbnail(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSaving, isPublishing])

  const saveWapWithThumbnail = async (isPublish) => {
    console.log('SAVING...')
    const elBoard = document.querySelector('.editor')
    const thumbnailUrl = await createJpegFromElement(
      elBoard,
      elBoard.clientWidth,
      elBoard.scrollHeight
    )
    dispatch(setWapThumbnail(thumbnailUrl))
    if (isPublish) {
      dispatch(publishWap())
      dispatch(togglePublish())
    } else {
      dispatch(saveWap())
      dispatch(toggleSave())
    }
  }

  // if (isSaving) return <Loader />
  return (
    <>
      <div
        ref={editorRef}
        style={{
          maxWidth: editorWidth,
          margin: '0 auto',
          transition: 'max-width 0.3s',
        }}
        className='editor-inner-container'
      >
        <Droppable droppableId='editor'>
          {(provided, snapshot) => {
            return (
              <section
                {...provided.droppableProps}
                ref={provided.innerRef}
                className='editor'
              >
                {!wap?.cmps?.length ? (
                  <h2>Drag and Drop to add components</h2>
                ) : (
                  wap.cmps.map((cmp, index) => (
                    <Draggable
                      key={cmp.id}
                      draggableId={cmp.id + index}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <DynamicCmp cmp={cmp} />
                        </div>
                      )}
                    </Draggable>
                  ))
                )}
                {provided.placeholder}
              </section>
            )
          }}
        </Droppable>
      </div>
    </>
  )
}
