import React from 'react'
import { deleteElement } from '../../../../store/wap/wap.action'
import { useSelector, useDispatch } from 'react-redux'
import { DisplaySize } from './display-size-cmp'
import { ColorPicker } from './color-picker'
import { TxtEditor } from './txt-editor'

export const SidebarEdit = ({ onSaveWap }) => {
  const dispatch = useDispatch()

  const selectedElement = useSelector(
    (storeState) => storeState.wapModule.selectedElement
  )
  const onDeleteElement = () => {
    if (selectedElement) dispatch(deleteElement(selectedElement))
  }

  return (
    <section className="editor-sidebar-container">
      <DisplaySize />
      {selectedElement && (
        <>
          {(selectedElement.type === 'txt' || selectedElement.type === 'btn') && <TxtEditor />}
            
          <div className="color-picker-container">
            {(selectedElement.type === 'txt' || selectedElement.type === 'btn') && (
                <>
                  <p>Font Color</p>
                  <ColorPicker isBackgroundColor={false} />
                </>
              )}
            <p>Background Color</p>
            <ColorPicker isBackgroundColor={true} />
          </div>
        </>
      )}
      {!selectedElement && <p>Please choose an element</p>}
      <button onClick={onDeleteElement}>Delete</button>
      <button onClick={onSaveWap}>Save</button>
    </section>
  )
}
