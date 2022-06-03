import NavigationIcon from '@mui/icons-material/Navigation'
import { socketService } from '../../../services/socket.service'
import { utilService } from '../../../services/util.service'
import { useEffect, useState } from 'react'

export const MouseCursor = ({ mouse }) => {
  // const [mouseCursors, setMouseCursors] = useState([])
  
  return <div style={{height: '40px',width: '40px', position: 'fixed', top: mouse.pos.my, left: mouse.pos.mx}}>
  <NavigationIcon style={{height: '90%',width: '90%',stroke: 'white',fill: mouse.color, transform: 'rotate(-30deg)'}}/>
  <p style={{textAlign: 'center', color: mouse.color}}>{mouse.fullname}</p>
  </div>
}
