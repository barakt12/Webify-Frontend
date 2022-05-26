import React from 'react'
import { setSelectedElement, deleteElement } from '../../../../store/wap/wap.action'
import { useSelector, useDispatch } from 'react-redux'
import { DisplaySize } from './display-size-cmp'

export const SidebarEdit = () => {
  const dispatch = useDispatch()

  const selectedElement = useSelector((storeState) => storeState.wapModule.selectedElement)
  const onDeleteElement = () => {
    if (selectedElement) dispatch(deleteElement(selectedElement))
  }

  return (
    <>
      <button onClick={onDeleteElement}>Delete</button>
      <DisplaySize />
    </>
  )
}
