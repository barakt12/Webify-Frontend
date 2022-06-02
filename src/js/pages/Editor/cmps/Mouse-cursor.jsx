import MouseIcon from '@mui/icons-material/Mouse';
import { socketService } from '../../../services/socket.service';
import { utilService } from '../../../services/util.service';
import { useEffect, useState } from 'react';

export const MouseCursor = ({mouse}) => {
  const [mouseCursors, setMouseCursors] = useState([])
  

  return <div style={{ position: 'fixed', top: mouse.pos.my, left: mouse.pos.mx}}>
  <MouseIcon style={{fill: mouse.color}}/>
  </div>
}