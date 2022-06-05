import React from 'react'
import {
  deleteCmp,
  duplicateCmp,
  undoWap,
} from '../../../../../store/wap/wap.action'
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
import { FormEdit } from './form-edit'
import { LinkInput } from './link-input'
import { MarkerInput } from './marker-input'

export const SidebarEdit = () => {
  const dispatch = useDispatch()

  const selectedCmp = useSelector(
    (storeState) => storeState.wapModule.selectedCmp
  )

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
        selectedCmp.style = selectedCmp.style
          ? { ...selectedCmp.style, backgroundImage: `url('${url}')` }
          : { backgroundImage: `url('${url}')` }
        break
      default:
        return
    }
    dispatch(updateCmp(selectedCmp))
  }

  return (
    <section className='editor-sidebar-container'>
      {selectedCmp && (
        <>
          {(selectedCmp.type === 'txt' || selectedCmp.type === 'btn') && (
            <TxtEditor />
          )}

          {selectedCmp.type !== 'img' && (
            <div className='color-picker-container'>
              {(selectedCmp.type === 'txt' || selectedCmp.type === 'btn') && (
                <>
                  <p>Font Color</p>
                  <EditColorPicker isBackgroundColor={false} />
                </>
              )}

              <p>Background Color</p>
              <EditColorPicker isBackgroundColor={true} />
            </div>
          )}
          {selectedCmp.type === 'container' && (
            <div className='img-url-container'>
              <p>Background Image</p>
              <ImageUrl imgUrl={''} cb={updateImg} />
            </div>
          )}
          {selectedCmp.type === 'img' && (
            <div className='img-url-container'>
              <p>Image Link</p>
              <ImageUrl imgUrl={selectedCmp.info.imgUrl} cb={updateImg} />
            </div>
          )}
          {selectedCmp.type === 'map' && (
            <div className='map-marker-container'>
              <p>Map Markers</p>
              <MarkerInput markers={selectedCmp.info.markers} />
            </div>
          )}
          {selectedCmp.type === 'video' && (
            <div className='video-url-container'>
              <p>Video Link</p>
              <VideoInput cmp={selectedCmp} />
            </div>
          )}
          {(selectedCmp.type === 'img' ||
            selectedCmp.type === 'icon' ||
            selectedCmp.type === 'txt' ||
            selectedCmp.type === 'btn') && (
            <div className='link-input-container'>
              <p>Link</p>
              <LinkInput cmp={selectedCmp} />
            </div>
          )}
          {(selectedCmp.type === 'gallery-grid' ||
            selectedCmp.type === 'carousel-lg' ||
            selectedCmp.type === 'carosuel' ||
            selectedCmp.type === 'paging-gallery') && (
            <div className='img-url-container'>
              <p>Image List</p>
              <GalleryImgList cmp={selectedCmp} />
            </div>
          )}
          {selectedCmp.type === 'form' && (
            <div className='form-edit-container'>
              <p>Form fields</p>
              <FormEdit cmp={selectedCmp} />
            </div>
          )}
        </>
      )}
      {!selectedCmp && (
        <p className='sidebar-action-text'>Please select item to edit</p>
      )}
      {selectedCmp && (
        <div className='action-btns'>
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
        </div>
      )}
    </section>
  )
}
