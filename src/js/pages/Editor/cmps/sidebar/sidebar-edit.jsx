import React from 'react'
import {
  setSelectedElement,
  deleteElement,
} from '../../../../store/wap/wap.action'
import { useSelector, useDispatch } from 'react-redux'
import { DisplaySize } from './display-size-cmp'
import { ColorPicker } from './color-picker'
import { TxtEditor } from './txt-editor'

export const SidebarEdit = () => {
  const dispatch = useDispatch()

  const selectedElement = useSelector(
    (storeState) => storeState.wapModule.selectedElement
  )
  const onDeleteElement = () => {
    if (selectedElement) dispatch(deleteElement(selectedElement))
  }

  return (
    <section className='editor-sidebar-container'>
      <DisplaySize />
      <TxtEditor />
      <div className='color-picker-container'>
        {((!selectedElement) ||
        ((selectedElement.type !== 'img') &&
        (selectedElement.type !== 'container'))) &&
        <><p>Font Color</p>
        <ColorPicker isBackgroundColor={false}/>
        </>}
        <p>Background Color</p>
        <ColorPicker isBackgroundColor={true}/>
      </div>
      <button onClick={onDeleteElement}>Delete</button>
    </section>
  )
}