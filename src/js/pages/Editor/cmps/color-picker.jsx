import React, { useState } from 'react'
import { CirclePicker } from 'react-color'
import ColorizeIcon from '@mui/icons-material/Colorize';

export const ColorPicker = () => {
  const [isShownToggle, setIsShownToggle] = useState(false)
  const [color, setColor] = useState({background: '#FFFFFF'})

  const handleClick = (color) => {
    setColor({ background: color })
  }


  const onChangeColor = ({target}) => {
    setColor({ background: target.value })
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
      "#4A90E2",
      "#F5A623",
      "#F8E71C",
      "#8B572A",
      "#417505",
      "#BD10E0",
      "#50E3C2",
      "#9013FE",
      "#B8E986"
    ]
    
    return (
      <section className='background-input-container'>
        <div className="colors-container">
        <label htmlFor="color-input"
         style={{
          height: '28px', width: '28px', borderRadius: '28px',
          backgroundColor: color.background, cursor: 'pointer'
          }}>
          <input onChange={(ev) => onChangeColor(ev)} id='color-input' type="color" />
            <ColorizeIcon />
          </label>
        {colors.map(color => <div onClick={() => handleClick(color)} key={color} style={{height: '28px', width: '28px', borderRadius: '28px', backgroundColor: color, cursor: 'pointer'}}></div>)}
        </div>
      </section>
    )
}