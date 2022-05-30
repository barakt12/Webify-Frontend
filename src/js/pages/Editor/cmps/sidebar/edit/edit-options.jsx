import * as React from 'react'
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
  const [fontType, setFontType] = React.useState('')
  const [textShadow, setTextShadow] = React.useState('')

  const handleChange = (event) => {
    if (isFontType) {
      console.log(isFontType)
      setFontType((prevState) => event.target.value)
      onChangeStyling('fontFamily', event.target.value)
    } else {
      setTextShadow((prevState) => event.target.value)
      onChangeStyling('textShadow', event.target.value)
    }
  }

  const fontTypeMenu = [
    <MenuItem key={uuidv4()} value={'system-ui'} style={{ fontSize: '14px' }}>
      System-ui
    </MenuItem>,
    <MenuItem key={uuidv4()} value={'sans-serif'} style={{ fontSize: '14px' }}>
      Sans-serif
    </MenuItem>,
    <MenuItem key={uuidv4()} value={'cursive'} style={{ fontSize: '14px' }}>
      Cursive
    </MenuItem>,
    <MenuItem key={uuidv4()} value={'monospace'} style={{ fontSize: '14px' }}>
      Monospace
    </MenuItem>,
    <MenuItem key={uuidv4()} value={'fangsong'} style={{ fontSize: '14px' }}>
      Fangsong
    </MenuItem>,
  ]

  const textShadowMenu = [
    <MenuItem key={uuidv4()} value={''} style={{ fontSize: '14px' }}>
      Default
    </MenuItem>,
    <MenuItem
      key={uuidv4()}
      value={'-2px 3px 0px black'}
      style={{ fontSize: '14px' }}
    >
      Light
    </MenuItem>,
    <MenuItem
      key={uuidv4()}
      value={'-3px 3px 0px black'}
      style={{ fontSize: '14px' }}
    >
      Medium
    </MenuItem>,
    <MenuItem
      key={uuidv4()}
      value={'-4px 3px 0px black'}
      style={{ fontSize: '14px' }}
    >
      Strong
    </MenuItem>,
  ]

  const currMenu = isFontType ? fontTypeMenu : textShadowMenu
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
                : 'sans-serif'
              : currTxtShadow
              ? currTxtShadow
              : ''
          }
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          style={{ fontSize: '14px' }}
        >
          {currMenu.map((menu) => menu)}
        </Select>
      </FormControl>
    </div>
  )
}
