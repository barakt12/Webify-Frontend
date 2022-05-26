import React from 'react'
import {
  setSelectedElement,
  deleteElement,
} from '../../../store/wap/wap.action'
import { useSelector, useDispatch } from 'react-redux'

export const SidebarEdit = () => {
  const dispatch = useDispatch()

  const selectedElement = useSelector(
    (storeState) => storeState.wapModule.selectedElement
  )
  const onDeleteElement = () => {
    dispatch(deleteElement(selectedElement))
  }

  return <button onClick={onDeleteElement}>Delete</button>
}
