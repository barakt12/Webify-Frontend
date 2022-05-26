import React from 'react';
import {setSelectedElement,deleteElement} from '../../../store/wap/wap.action'
import { useSelector, useDispatch } from 'react-redux'
import { ColorPicker } from './color-picker'

export const SidebarEdit = () => {
  const dispatch = useDispatch()

  const selectedElement = useSelector((storeState) => storeState.wapModule.selectedElement)
  const onDeleteElement = () => dispatch(deleteElement(selectedElement))


  return <section className="editor-sidebar-container">
    <div className="color-picker-container">
       <p>Background Color</p>
       <ColorPicker />
    </div>
       <button onClick={onDeleteElement}>Delete</button>
  </section>
}
