import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export const EditOptions = ({
  onChangeStyling,
  isFontType,
  currTxtShadow,
  currFontType,
}) => {
  console.log(currFontType)
  const [, setFontType] = useState('')
  const [, setTextShadow] = useState('')

  const handleChange = (event) => {
    if (isFontType) {
      setFontType(event.target.value)
      onChangeStyling('fontFamily', event.target.value)
    } else {
      setTextShadow(event.target.value)
      onChangeStyling('textShadow', event.target.value)
    }
  }

  const fonts = [
    'OpenSans',
    'Forum',
    'Oswald',
    'Roboto',
    'SourceSans',
    'Lobster',
    'Joan',
    'Playfair',
    'Bebas',
    'Helvetica',
    'Arial',
  ]

  const textShadowMenu = [
    <MenuItem
      key={uuidv4()}
      value={''}
      style={{ fontSize: '13px', width: '90%' }}
    >
      Default
    </MenuItem>,
    <MenuItem
      key={uuidv4()}
      value={'rgb(0 0 0 / 51%) -2px 3px'}
      style={{ fontSize: '13px', width: '90%' }}
    >
      Light
    </MenuItem>,
    <MenuItem
      key={uuidv4()}
      value={'-3px 3px 0px black'}
      style={{ fontSize: '13px', width: '90%' }}
    >
      Medium
    </MenuItem>,
    <MenuItem
      key={uuidv4()}
      value={'-4px 3px 0px black'}
      style={{ fontSize: '13px', width: '90%' }}
    >
      Strong
    </MenuItem>,
  ]

  // if(currTxtShadow){
  //   if(currTxtShadow.split(' ')[0] === '-2px') currTxtShadow = 'Light'
  //   else if(currTxtShadow.split(' ')[0] === '-3px') currTxtShadow = 'Medium'
  //   else if(currTxtShadow.split(' ')[0] === '-4px') currTxtShadow = 'Strong'
  // }
  return (
    <div>
      <FormControl
        sx={{
          backgroundColor: 'whitesmoke',
          borderRadius: 1,
          m: 1,
          minWidth: 105,
          margin: 0,
        }}
        size='small'
      >
        <Select
          //BE AWARE!, sans-serif is the default font-family when no font-family found on the selected element
          value={
            isFontType
              ? currFontType
                ? currFontType
                : 'OpenSans'
              : currTxtShadow
              ? currTxtShadow
              : ''
          }
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          style={{ fontSize: '14px', width: '120px' }}
        >
          {/* {currMenu.map((menu) => menu)} */}

          {isFontType
            ? fonts.map((font) => (
                <MenuItem
                  key={uuidv4()}
                  value={font}
                  style={{ fontSize: '13px', width: '90%' }}
                >
                  {font}
                </MenuItem>
              ))
            : textShadowMenu}
        </Select>
      </FormControl>
    </div>
  )
}
