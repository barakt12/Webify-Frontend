import React from 'react'
import {
  setSelectedElement,
  deleteElement,
} from '../../../../store/wap/wap.action'
import { ColorPicker } from '../color-picker'
import { useSelector, useDispatch } from 'react-redux'
import { DisplaySize } from './display-size-cmp'

export const SidebarEdit = () => {
  const dispatch = useDispatch()

  const selectedElement = useSelector(
    (storeState) => storeState.wapModule.selectedElement
  )
  const onDeleteElement = () => {
    if (selectedElement) dispatch(deleteElement(selectedElement))
  }

  return (
    <>
      <div className="color-picker-container">
        <p>Background Color</p>
        <ColorPicker />
      </div>
      <button onClick={onDeleteElement}>Delete</button>
      <DisplaySize />
    </>
  )
}
