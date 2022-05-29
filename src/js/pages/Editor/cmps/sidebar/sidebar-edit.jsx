import React from 'react'
import { deleteElement } from '../../../../store/wap/wap.action'
import { useSelector, useDispatch } from 'react-redux'

import { ColorPicker } from './color-picker'
import { ImageUrl } from './img-url-cmp'
import { TxtEditor } from './txt-editor'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import SaveAltIcon from '@mui/icons-material/SaveAlt'

export const SidebarEdit = ({ onSaveWap }) => {
  const dispatch = useDispatch()

  const selectedElement = useSelector(
    (storeState) => storeState.wapModule.selectedElement
  )
  const onDeleteElement = () => {
    if (selectedElement) dispatch(deleteElement(selectedElement))
  }

  return (
    <section className='editor-sidebar-container'>
      {selectedElement && (
        <>
          {(selectedElement.type === 'txt' ||
            selectedElement.type === 'btn') && <TxtEditor />}

          <div className='color-picker-container'>
            {(selectedElement.type === 'txt' ||
              selectedElement.type === 'btn') && (
              <>
                <p>Font Color</p>
                <ColorPicker isBackgroundColor={false} />
              </>
            )}
            <p>Background Color</p>
            <ColorPicker isBackgroundColor={true} />
          </div>
          {selectedElement.type === 'img' && (
            <div className='img-url-container'>
              <p>Image Link</p>
              <ImageUrl cmp={selectedElement} />
            </div>
          )}
        </>
      )}
      {!selectedElement && (
        <p className='sidebar-action-text'>Please choose an element</p>
      )}
      <div className='action-btns'>
        <button onClick={onDeleteElement}>
          {' '}
          <DeleteForeverIcon />
          <span>Delete</span>
        </button>
        <button onClick={onSaveWap}>
          <SaveAltIcon />
          <span>Save</span>
        </button>
      </div>
    </section>
  )
}
