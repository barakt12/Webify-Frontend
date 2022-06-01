import React from 'react'
import { deleteElement, duplicateElement, undoWap } from '../../../../../store/wap/wap.action'
import { useSelector, useDispatch } from 'react-redux'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import RestoreIcon from '@mui/icons-material/Restore'
import { EditColorPicker } from './edit-color-picker'
import { ImageUrl } from './img-url-input'
import { TxtEditor } from './txt-editor'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { VideoInput } from './video-input'
import { GalleryImgList } from './gallery-img-list'
export const SidebarEdit = () => {
  const dispatch = useDispatch()

  const selectedElement = useSelector((storeState) => storeState.wapModule.selectedElement)

  const onElementAction = (actionType) => {
    if (!selectedElement) return
    switch (actionType) {
      case 'delete':
        dispatch(deleteElement(selectedElement))
        break
      case 'duplicate':
        dispatch(duplicateElement(selectedElement))
        break
      case 'undo':
        dispatch(undoWap())
        break
      default:
        return
    }
  }

  return (
    <section className="editor-sidebar-container">
      {selectedElement && (
        <>
          {(selectedElement.type === 'txt' || selectedElement.type === 'btn' || selectedElement.type === 'img') && <TxtEditor />}

          <div className="color-picker-container">
            {(selectedElement.type === 'txt' || selectedElement.type === 'btn') && (
              <>
                <p>Font Color</p>
                <EditColorPicker isBackgroundColor={false} />
              </>
            )}
            <p>Background Color</p>
            <EditColorPicker isBackgroundColor={true} />
          </div>
          {selectedElement.type === 'img' && (
            <div className="img-url-container">
              <p>Image Link</p>
              <ImageUrl cmp={selectedElement} />
            </div>
          )}
          {selectedElement.type === 'video' && (
            <div className="video-url-container">
              <p>Video Link</p>
              <VideoInput cmp={selectedElement} />
            </div>
          )}
          {(selectedElement.type === 'gallery-grid' || selectedElement.type === 'carousel-lg' || selectedElement.type === 'carosuel' || selectedElement.type === 'paging-gallery') && (
            <div className="img-url-container">
              <p>Image List</p>
              <GalleryImgList cmp={selectedElement} />
            </div>
          )}
        </>
      )}
      {!selectedElement && <p className="sidebar-action-text">Please choose an element</p>}
      <div className="action-btns">
        <button onClick={() => onElementAction('duplicate')}>
          <ContentCopyIcon />
          <span>Duplicate</span>
        </button>
        <button onClick={() => onElementAction('delete')}>
          {' '}
          <DeleteForeverIcon />
          <span>Delete</span>
        </button>
        <button onClick={() => onElementAction('undo')}>
          <RestoreIcon />
          <span>Undo</span>
        </button>
      </div>
    </section>
  )
}
