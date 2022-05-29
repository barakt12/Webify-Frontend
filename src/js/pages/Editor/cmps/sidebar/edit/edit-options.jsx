import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export const EditOptions = ({
  onChangeFontType,
  onChangeTextShadow,
  isFontType,
}) => {
  const [fontType, setFontType] = React.useState('')
  const [textShadow, setTextShadow] = React.useState('')

  const handleChange = (event) => {
    if (isFontType) {
      console.log(isFontType)
      setFontType((prevState) => event.target.value)
      onChangeFontType(event.target.value)
    } else {
      setTextShadow((prevState) => event.target.value)
      onChangeTextShadow(event.target.value)
    }
  }

  const fontTypeMenu = [
    <MenuItem key={uuidv4()} value={'System-ui'} style={{ fontSize: '14px' }}>
      System-ui
    </MenuItem>,
    <MenuItem key={uuidv4()} value={'San-serif'} style={{ fontSize: '14px' }}>
      Sans-serif
    </MenuItem>,
    <MenuItem key={uuidv4()} value={'Cursive'} style={{ fontSize: '14px' }}>
      Cursive
    </MenuItem>,
    <MenuItem key={uuidv4()} value={'Monospace'} style={{ fontSize: '14px' }}>
      Monospace
    </MenuItem>,
    <MenuItem key={uuidv4()} value={'Fangsong'} style={{ fontSize: '14px' }}>
      Fangsong
    </MenuItem>,
  ]

  const textShadowMenu = [
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
          value={isFontType ? fontType : textShadow}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          style={{ fontSize: '14px' }}
        >
          <MenuItem
            value=''
            sx={{
              width: 100,
              fontSize: '14px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <em style={{ fontStyle: 'normal' }}>Default</em>
          </MenuItem>
          {currMenu.map((menu) => menu)}
          {/* Material-ui doesnt accept child fragments */}
          {/* {(isFontType) ? <span>
          <MenuItem value={'System-ui'}>System-ui</MenuItem>
          <MenuItem value={'Cursive'}>Cursive</MenuItem>
          </span>
          :
          <span>
          <MenuItem value={'-2px 3px 0px black'}>Light</MenuItem>
          <MenuItem value={'-3px 3px 0px black'}>Medium</MenuItem>
          <MenuItem value={'-4px 3px 0px black'}>Strong</MenuItem>
          </span>
          } */}
        </Select>
      </FormControl>
    </div>
  )
}
