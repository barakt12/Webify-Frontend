import React from 'react'
import { deleteElement } from '../../../../../store/wap/wap.action'
import { toggleSave } from '../../../../../store/system/system.action'
import { useSelector, useDispatch } from 'react-redux'

import { EditColorPicker } from './edit-color-picker'
import { ImageUrl } from './img-url-input'
import { TxtEditor } from './txt-editor'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import SaveIcon from '@mui/icons-material/Save'
import { VideoInput } from './video-input'
import { GalleryImgList } from './gallery-img-list'
export const SidebarEdit = () => {
  const dispatch = useDispatch()

  const selectedElement = useSelector((storeState) => storeState.wapModule.selectedElement)

  const onDeleteElement = () => {
    if (selectedElement) dispatch(deleteElement(selectedElement))
  }

  const onSaveWap = () => {
    dispatch(toggleSave())
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
          {(selectedElement.type === 'gallery-grid' || selectedElement.type === 'carousel-lg' || selectedElement.type === 'carosuel') && (
            <div className="img-url-container">
              <p>Image List</p>
              <GalleryImgList cmp={selectedElement} />
            </div>
          )}
        </>
      )}
      {!selectedElement && <p className="sidebar-action-text">Please choose an element</p>}
      <div className="action-btns">
        <button onClick={onDeleteElement}>
          {' '}
          <DeleteForeverIcon />
          <span>Delete</span>
        </button>
        <button onClick={onSaveWap}>
          <SaveIcon />
          <span>Save</span>
        </button>
      </div>
    </section>
  )
}
