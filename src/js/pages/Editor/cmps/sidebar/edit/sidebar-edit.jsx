import React from 'react'
import { deleteElement,wapUndo } from '../../../../../store/wap/wap.action'
import { toggleSave } from '../../../../../store/system/system.action'
import { useSelector, useDispatch } from 'react-redux'

import { EditColorPicker } from './edit-color-picker'
import { ImageUrl } from './img-url-input'
import { TxtEditor } from './txt-editor'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import UndoIcon from '@mui/icons-material/Undo';
import SaveIcon from '@mui/icons-material/Save'

export const SidebarEdit = () => {
  const dispatch = useDispatch()

  const {selectedElement,wapDraft} = useSelector(
    (storeState) => storeState.wapModule
  )

  const onUndo = () => {
    console.log('undo')
    const cmps = wapDraft.pop()
    dispatch(wapUndo(cmps))
  }

  const onDeleteElement = () => {
    if (selectedElement) dispatch(deleteElement(selectedElement))
  }

  const onSaveWap = () => {
    dispatch(toggleSave())
  }

  return (
    <section className='editor-sidebar-container'>
      {selectedElement && (
        <>
          {(selectedElement.type === 'txt' ||
            selectedElement.type === 'btn' ||
            selectedElement.type === 'img') && <TxtEditor />}

          <div className='color-picker-container'>
            {(selectedElement.type === 'txt' ||
              selectedElement.type === 'btn') && (
              <>
                <p>Font Color</p>
                <EditColorPicker isBackgroundColor={false} />
              </>
            )}
            <p>Background Color</p>
            <EditColorPicker isBackgroundColor={true} />
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
        <button onClick={onUndo}>
          {' '}
          <UndoIcon />
          <span>Undo</span>
        </button>
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
