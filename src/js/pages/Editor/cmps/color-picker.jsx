import React, { useState } from 'react'
import ColorizeIcon from '@mui/icons-material/Colorize'
import { useDispatch, useSelector } from 'react-redux'
import { wapService } from '../../../services/wap-service' 
import { setWap } from '../../../store/wap/wap.action'

export const ColorPicker = () => {
  const [color, setColor] = useState({ background: '#FFFFFF' })
  const dispatch = useDispatch()
  const { wap, selectedElement } = useSelector(
    (storeState) => storeState.wapModule
  )

  const onChangeColor = (colorInput) => {
    // setColor((prevState) => ({ ...prevState ,background: colorInput }))
    if (!selectedElement) return
    //had to use color input
    console.log(selectedElement)
    selectedElement.style = { ...selectedElement.style, background: colorInput }
    wapService.updateCmp(wap,selectedElement)
    dispatch(setWap(wap))
  }


  const popover = {
    position: 'absolute',
    zIndex: 2,
  }

  // const cover = {
  //   position: 'fixed',
  //   top: '0px',
  //   right: '0px',
  //   bottom: '0px',
  //   left: '0px',
  // }

  const colors = [
    '#4A90E2',
    '#F5A623',
    '#F8E71C',
    '#8B572A',
    '#417505',
    '#BD10E0',
    '#50E3C2',
    '#9013FE',
    '#B8E986',
    'transparent'
  ]

  return (
    <section className="background-input-container">
      <div className="colors-container">
        <label
          htmlFor="color-input"
          style={{
            height: '28px',
            width: '28px',
            borderRadius: '28px',
            backgroundColor: color.background,
            cursor: 'pointer',
          }}
        >
          <input
            onChange={(ev) => onChangeColor(ev.target.value)}
            id="color-input"
            type="color"
            value={color.background}
          />
          <ColorizeIcon />
        </label>
        {colors.map((color) => (
          <div
            onClick={() => onChangeColor(color)}
            key={color}
            style={{
              height: '28px',
              width: '28px',
              borderRadius: '28px',
              backgroundColor: (color === 'transparent') ? 'purple' : color,
              cursor: 'pointer',
            }}
          ></div>
        ))}
      </div>
    </section>
  )
}
