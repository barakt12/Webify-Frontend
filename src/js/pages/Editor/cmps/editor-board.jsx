import { Draggable, Droppable } from 'react-beautiful-dnd'
import { DynamicCmp } from './dynamic-cmp/dynamic-cmp'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import {
  setWapThumbnail,
  saveWap,
  publishWap,
  updateWap,
} from '../../../store/wap/wap.action'

import { createJpegFromElement } from '../../../services/cloudinary.service'
import { Loader } from '../../../cmps/loader'
import { togglePublish, toggleSave } from '../../../store/system/system.action'
import { toast } from 'react-toastify'
import { WapNameInput } from './wap-name-input'

export const EditorBoard = ({ wap }) => {
  const dispatch = useDispatch()
  const editorWidth = useSelector(
    (storeState) => storeState.wapModule.displaySize
  )
  const { isSaving } = useSelector((storeState) => storeState.systemModule)
  const { isPublishing } = useSelector((storeState) => storeState.systemModule)
  const editorRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    console.log('in 1')
    if ((!wap?.name && isSaving) || (!wap?.name && isPublishing)) {
      console.log('in 2')
      setIsModalOpen(true)
      return
    }
    if (isSaving) {
      saveWapWithThumbnail(false)
    } else if (isPublishing) {
      saveWapWithThumbnail(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSaving, isPublishing, isModalOpen])

  const saveWapWithThumbnail = async (isPublish) => {
    try {
      if (isPublish) {
        await dispatch(publishWap())

        toast.success('Published Site Successfully')
      } else {
        dispatch(saveWap())
        toast.success('Saved Site Successfully')
      }
    } catch (err) {
      toast.error(err.message)
    } finally {
      if (isPublish) {
        dispatch(togglePublish())
      } else {
        dispatch(toggleSave())
      }
    }
  }

  const submitWapName = (name) => {
    wap.name = name
    dispatch(updateWap(wap))
    setIsModalOpen(false)
  }

  // return
  return (
    <>
      {isModalOpen && <WapNameInput submitWapName={submitWapName} />}
      {isSaving && wap?.name && (
        <Loader displayMsg={'Saving your amazing work!'} />
      )}
      {isPublishing && wap?.name && (
        <Loader displayMsg={'Publishing your amazing work!'} />
      )}
      {/* {editorWidth === '420px' && (
        <img src={require('../../../../assets/img/iphone13.png')} alt='' />
      )} */}

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
                  <section className='editor-preview-container'>
                    <h2>Let's start building your page!</h2>
                    <img
                      src={require('../../../../assets/img/webify-editor.gif')}
                      alt=''
                    />
                  </section>
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
                {/* {!isFromSidebar && (
                  <>
                    {provided.placeholder}
                    {!isEmpty(placeholderProps) && snapshot.isDraggingOver && (
                      <div
                        className='placeholder'
                        style={{
                          top: placeholderProps.clientY,
                          left: placeholderProps.clientX,
                          height: placeholderProps.clientHeight,
                          width: placeholderProps.clientWidth,
                        }}
                      />
                    )}
                  </>
                )} */}
              </section>
            )
          }}
        </Droppable>
      </div>
    </>
  )
}
