import NavigationIcon from '@mui/icons-material/Navigation'
import { socketService } from '../../../services/socket.service'
import { utilService } from '../../../services/util.service'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'


export const MouseCursor = ({ mouse }) => {
  // console.log('mouse', mouse)
  return (
    <div
      style={{
        height: '40px',
        width: '40px',
        position: 'fixed',
        zIndex: 99999,
        top: mouse.pos.my,
        left: mouse.pos.mx,
      }}
    >
      <NavigationIcon
        style={{
          height: '90%',
          width: '90%',
          fill: mouse.color,
          transform: 'rotate(-30deg)',
        }}
      />
      <p style={{ textAlign: 'center', color: mouse.color }}>{mouse.user}</p>
    </div>
  )
}
