import React, { useEffect, useState } from 'react'
import ColorizeIcon from '@mui/icons-material/Colorize'
import { useDispatch, useSelector } from 'react-redux'
import { wapService } from '../../../../services/wap-service'
import { setWap } from '../../../../store/wap/wap.action'
import _ from 'lodash'

export const ColorPicker = ({ isBackgroundColor }) => {
  //use memo
  const [color, setColor] = useState({
    color: '#FFFFFF',
    background: '#FFFFFF',
  })
  const dispatch = useDispatch()
  const { wap, selectedElement } = useSelector(
    (storeState) => storeState.wapModule
  )

  const onChangeColor = (colorInput) => {
    setColor((prevState) => ({ ...prevState, background: colorInput }))
    if (!selectedElement) return
    const newColor = isBackgroundColor
      ? { background: colorInput }
      : { color: colorInput }
    selectedElement.style = { ...selectedElement.style, ...newColor }
    wapService.updateCmp(wap, selectedElement)
    dispatch(setWap(wap))
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
          {!isBackgroundColor ? (
            <ColorizeIcon
              style={{
                borderRadius: '50px',
              }}
            />
          ) : (
            <svg
              style={{ transform: 'scale(0.7)' }}
              width='28px'
              height='28px'
              viewBox='0 -32 576 576'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M512 320s-64 92.65-64 128c0 35.35 28.66 64 64 64s64-28.65 64-64-64-128-64-128zm-9.37-102.94L294.94 9.37C288.69 3.12 280.5 0 272.31 0s-16.38 3.12-22.62 9.37l-81.58 81.58L81.93 4.76c-6.25-6.25-16.38-6.25-22.62 0L36.69 27.38c-6.24 6.25-6.24 16.38 0 22.62l86.19 86.18-94.76 94.76c-37.49 37.48-37.49 98.26 0 135.75l117.19 117.19c18.74 18.74 43.31 28.12 67.87 28.12 24.57 0 49.13-9.37 67.87-28.12l221.57-221.57c12.5-12.5 12.5-32.75.01-45.25zm-116.22 70.97H65.93c1.36-3.84 3.57-7.98 7.43-11.83l13.15-13.15 81.61-81.61 58.6 58.6c12.49 12.49 32.75 12.49 45.24 0s12.49-32.75 0-45.24l-58.6-58.6 58.95-58.95 162.44 162.44-48.34 48.34z' />
            </svg>
          )}
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
