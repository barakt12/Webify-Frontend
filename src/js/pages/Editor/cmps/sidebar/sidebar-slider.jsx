import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export const SidebarSlider = () => {
  return (
    <Box width={92}>
      <Slider defaultValue={40} aria-label="Default" valueLabelDisplay="auto" min={10} max={40}/>
    </Box>
  );
}