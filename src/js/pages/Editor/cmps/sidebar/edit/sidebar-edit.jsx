import React from 'react'
import { deleteCmp, duplicateCmp, undoWap } from '../../../../../store/wap/wap.action'
import { useSelector, useDispatch } from 'react-redux'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import RestoreIcon from '@mui/icons-material/Restore'
import { EditColorPicker } from './edit-color-picker'
import { ImageUrl } from './img-url-input'
import { TxtEditor } from './txt-editor'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { VideoInput } from './video-input'
import { GalleryImgList } from './gallery-img-list'
import { updateCmp } from '../../../../../store/wap/wap.action'

export const SidebarEdit = () => {
  const dispatch = useDispatch()

  const selectedCmp = useSelector((storeState) => storeState.wapModule.selectedCmp)

  const onCmpAction = (actionType) => {
    if (!selectedCmp) return
    switch (actionType) {
      case 'delete':
        dispatch(deleteCmp(selectedCmp))
        break
      case 'duplicate':
        dispatch(duplicateCmp(selectedCmp))
        break
      case 'undo':
        dispatch(undoWap())
        break
      default:
        return
    }
  }

  const updateImg = (url) => {
    switch (selectedCmp.type) {
      case 'img':
        selectedCmp.info.imgUrl = url
        break
      case 'container':
        selectedCmp.style = selectedCmp.style ? { ...selectedCmp.style, backgroundImage: `url('${url}')` } : { backgroundImage: `url('${url}')` }
        break
      default:
        return
    }
    dispatch(updateCmp(selectedCmp))
  }

  return (
    <section className="editor-sidebar-container">
      {selectedCmp && (
        <>
          {(selectedCmp.type === 'txt' || selectedCmp.type === 'btn' || selectedCmp.type === 'img') && <TxtEditor />}

          <div className="color-picker-container">
            {(selectedCmp.type === 'txt' || selectedCmp.type === 'btn') && (
              <>
                <p>Font Color</p>
                <EditColorPicker isBackgroundColor={false} />
              </>
            )}
            <p>Background Color</p>
            <EditColorPicker isBackgroundColor={true} />
            {selectedCmp.type === 'container' && (
              <div className="img-url-container">
                <p>Background Image</p>
                <ImageUrl imgUrl={''} cb={updateImg} />
              </div>
            )}
          </div>
          {selectedCmp.type === 'img' && (
            <div className="img-url-container">
              <p>Image Link</p>
              <ImageUrl imgUrl={selectedCmp.info.imgUrl} cb={updateImg} />
            </div>
          )}
          {selectedCmp.type === 'video' && (
            <div className="video-url-container">
              <p>Video Link</p>
              <VideoInput cmp={selectedCmp} />
            </div>
          )}
          {(selectedCmp.type === 'gallery-grid' || selectedCmp.type === 'carousel-lg' || selectedCmp.type === 'carosuel' || selectedCmp.type === 'paging-gallery') && (
            <div className="img-url-container">
              <p>Image List</p>
              <GalleryImgList cmp={selectedCmp} />
            </div>
          )}
        </>
      )}
      {!selectedCmp && <p className="sidebar-action-text">Please select item to edit</p>}
      {selectedCmp && <div className="action-btns">
        <button onClick={() => onCmpAction('delete')}>
          {' '}
          <DeleteForeverIcon />
          <span>Delete</span>
        </button>
        <button onClick={() => onCmpAction('duplicate')}>
          <ContentCopyIcon />
          <span>Duplicate</span>
        </button>
        <button onClick={() => onCmpAction('undo')}>
          <RestoreIcon />
          <span>Undo</span>
        </button>
      </div>}
    </section>
  )
}
