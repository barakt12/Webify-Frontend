import React, { useState } from 'react'
import ColorizeIcon from '@mui/icons-material/Colorize'
import { useDispatch, useSelector } from 'react-redux'
import { updateCmp } from '../../../../../store/wap/wap.action'
import _ from 'lodash'

export const EditColorPicker = ({ isBackgroundColor }) => {
  //use memo
  const [color, setColor] = useState({
    background: '#FFFFFF',
  })
  const dispatch = useDispatch()
  const { selectedCmp } = useSelector((storeState) => storeState.wapModule)

  const onChangeColor = (colorInput) => {
    setColor((prevState) => ({ ...prevState, background: colorInput }))
    if (!selectedCmp) return
    const newColor = isBackgroundColor
      ? { backgroundColor: colorInput }
      : { color: colorInput }
    const cmpToUpdate = JSON.parse(JSON.stringify(selectedCmp))
    cmpToUpdate.style = { ...cmpToUpdate.style, ...newColor }

    dispatch(updateCmp(cmpToUpdate))
  }

  const debounce = _.debounce((colorInput) => onChangeColor(colorInput), 25)

  const backgroundColors = [
    '#FFFFFF',
    '#F28B82',
    '#FBBC04',
    '#CCFF90',
    '#A7FFEB',
    '#CBF0F8',
    '#F1E4DE',
    '#D7AEFB',
    '#FDCFE8',
    '#E6C9A8',
    'transparent',
  ]

  const colors = [
    '#FFFFFF',
    '#F28B82',
    '#FBBC04',
    '#CCFF90',
    '#A7FFEB',
    '#CBF0F8',
    '#F1E4DE',
    '#D7AEFB',
    '#FDCFE8',
    '#E6C9A8',
    '#151515',
  ]

  let renderedColors = isBackgroundColor ? backgroundColors : colors

  return (
    <section className='background-input-container'>
      <div className='colors-container'>
        <label
          htmlFor='color-input'
          style={{
            height: '28px',
            width: '28px',
            borderRadius: '28px',
            backgroundColor:
              color.background === 'transparent' ? '#FFF' : color.background,
            cursor: 'pointer',
            border: '1px solid rgba(255, 255, 255, 0.4)',
          }}
        >
          <input
            onChange={(ev) => debounce(ev.target.value)}
            id='color-input'
            type='color'
          />
          <ColorizeIcon
            style={{
              borderRadius: '50px',
            }}
          />
        </label>
        {renderedColors.map((color) => (
          <div
            onClick={() => onChangeColor(color)}
            key={color}
            style={{
              height: '28px',
              width: '28px',
              borderRadius: '28px',
              background:
                color === 'transparent'
                  ? 'url(https://images.saymedia-content.com/.image/t_share/MTc0NTEwNzkwMDA5ODI1Mjcw/how-many-squares-are-on-a-chessboard-a-maths-problem.png)'
                  : color,
              backgroundSize: '100%',
              cursor: 'pointer',
              border: `1px solid ${
                color === '#151515'
                  ? 'rgba(255,255,255,0.4)'
                  : 'rgba(0, 0, 0, 0.4)'
              }`,
            }}
          ></div>
        ))}
      </div>
    </section>
  )
}
