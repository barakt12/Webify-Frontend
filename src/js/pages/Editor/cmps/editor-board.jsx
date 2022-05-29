import { Draggable, Droppable } from 'react-beautiful-dnd'
import { DynamicCmp } from './dynamic-cmp/dynamic-cmp'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
// import html2canvas from 'html2canvas'
import { setWapThumbnail, saveWap } from '../../../store/wap/wap.action'
import { createJpegFromElement } from '../../../services/cloudinary.service'
import { toJpeg,toSvg } from 'html-to-image'


export const EditorBoard = ({ wap, isSaving, onDoneSaving }) => {
  const dispatch = useDispatch()

  const editorWidth = useSelector(
    (storeState) => storeState.wapModule.displaySize
  )

  const editorRef = useRef(null)

  useEffect(() => {
    if (isSaving) {
      console.log('Saving')
      exportAsImage(editorRef.current, editorRef.current.clientWidth, editorRef.current.clientHeight)
      console.log(editorRef.current.clientWidth)
      console.log('height',editorRef.current.clientHeight)
      // createJpegFromElement(editorRef.current)
    }
  }, [isSaving])

  // const exportAsImage = async (el, imageFileName) => {
  //   const canvas = await html2canvas(editorRef.current, {
  //     allowTaint: true,
  //     useCORS: true,
  //   })
  //   const image = canvas.toDataURL('image/png', 1.0)
  //   dispatch(setWapThumbnail(image))
  //   dispatch(saveWap())
  //   onDoneSaving()
  // }

  const exportAsImage = async(element, width, height) => {
  console.log('SAVING...')
  const dataUrl = await toSvg(element, { cacheBust: true, style: { width: '100%', margin: '0', outline: 'none' }, width, height, quality: 0.5 })
  // const ev = {
  //   target: {
  //     files: [dataUrl],
  //   },
  // }
  // return await uploadImgToCloud(dataUrl)
  dispatch(setWapThumbnail(dataUrl))
  dispatch(saveWap())
  onDoneSaving()
}


  return (
    <div ref={editorRef} className='editor-inner-container'>
      <Droppable droppableId='editor'>
        {(provided, snapshot) => {
          return (
            <section
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='editor'
              style={{
                maxWidth: editorWidth,
                margin: 'auto',
                transition: 'max-width 0.3s',
              }}
            >
              {!wap?.cmps?.length ? (
                <p>Drag and Drop to add components</p>
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
            </section>
          )
        }}
      </Droppable>
    </div>
  )
}
