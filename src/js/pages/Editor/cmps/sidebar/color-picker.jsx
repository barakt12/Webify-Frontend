import React, { useState } from 'react'
import ColorizeIcon from '@mui/icons-material/Colorize'
import { useDispatch, useSelector } from 'react-redux'
import { wapService } from '../../../../services/wap-service' 
import { setWap } from '../../../../store/wap/wap.action'

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
    '#FFFFFF',
    '#F28B82',
    '#FBBC04',
    '#FFF475',
    '#CCFF90',
    '#A7FFEB',
    '#CBF0F8',
    '#F1E4DE',
    '#D7AEFB',
    '#FDCFE8',
    '#E6C9A8',
    'transparent'
  ]
  // const colors = [ // Google's color palette
  //   '#FFFFFF',
  //   '#F28B82',
  //   '#FBBC04',
  //   '#FFF475',
  //   '#CCFF90',
  //   '#A7FFEB',
  //   '#CBF0F8',
  //   '#F1E4DE',
  //   '#D7AEFB',
  //   '#FDCFE8',
  //   '#E6C9A8',
  // ]

  return (
    <section className='background-input-container'>
      <div className='colors-container'>
        <label
          htmlFor='color-input'
          style={{
            height: '28px',
            width: '28px',
            borderRadius: '28px',
            backgroundColor: color.background,
            cursor: 'pointer',
          }}
        >
          <input
            onChange={(ev) => onChangeColor(ev)}
            id='color-input'
            type='color'
          />
          <ColorizeIcon
            style={{
              border: '0.1px solid rgba(0 0 0 / 13%)',
              borderRadius: '50px',
            }}
          />
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
              border: '1px solid rgba(0 0 0 / 13%)',
            }}
          ></div>
        ))}
      </div>
    </section>
  )
}
