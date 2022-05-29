import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export const SidebarSlider = ({isFontSize,onChangeFontSize,onChangeBorderRadius,selectedElement}) => {

  let currValue
  let minVal
  let maxVal
  let func = (isFontSize) ? onChangeFontSize : onChangeBorderRadius

  if(isFontSize){
    minVal = 10
    maxVal = 60
    currValue = (selectedElement?.style?.fontSize) ? (+selectedElement?.style?.fontSize.replace('rem',''))*16 : null
  }else{
    minVal = 0
    maxVal = 15
    currValue = (selectedElement?.style?.borderRadius) ? (+selectedElement?.style?.borderRadius) : null
  }

  return (
    <Box width={92}>
      <Slider size="medium" key={'fontSizeSlider123'} onChange={(ev) => func(ev.target.value)} value={currValue ? currValue : 10} aria-label="Default" valueLabelDisplay="auto" min={minVal} max={maxVal}/>
    </Box>
  );
}