import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export const SidebarSlider = ({onChangeFontSize,selectedElement}) => {

  const currSize = ((+selectedElement.style.fontSize.replace('rem',''))*16)

  return (
    <Box width={92}>
      <Slider key={'fontSizeSlider123'} onChange={(ev) => onChangeFontSize(ev.target.value)} value={currSize ? currSize : 20} aria-label="Default" valueLabelDisplay="auto" min={10} max={50}/>
    </Box>
  );
}