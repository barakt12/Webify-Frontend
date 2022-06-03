import NavigationIcon from '@mui/icons-material/Navigation'
import { socketService } from '../../../services/socket.service'
import { utilService } from '../../../services/util.service'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

export const MouseCursor = () => {
  // const _ = require('lodash')
  // const onMouseMove = _.debounce((ev) => handleMouseMove(ev), 10)
  const params = useParams()
  const loggedUser = useSelector((storeState) => storeState.userModule.user)
  const [connectedMouses, setConnectedMouses] = useState([])

  useEffect(() => {
    console.log('cursor cmp is up')
    document.body.addEventListener('mousemove', onMouseMove)
    return () => {
      console.log('cursor cmp is down')
      document.body.removeEventListener('mousemove',onMouseMove)
    }
  }, [])

  useEffect(() => {
    socketService.setup()
    socketService.on('mouse_position_update', (connectedMouses) => {
      setConnectedMouses(connectedMouses)
  })
    return () => {
      socketService.off('mouse_position_update')
      socketService.terminate()
    }
  }, [])

  const onMouseMove = (ev) => {
    let mouseInfo = {
      editorId: params.editorId,
      user: loggedUser ? loggedUser.fullname : 'Guest',
      pos: { mx: ev.clientX, my: ev.clientY },
    }
    socketService.emit('mouse_position', mouseInfo)
  }

  return (
    <>
      {(connectedMouses.length) ?
        connectedMouses.map((mouse) => {
          return (
            <div
              style={{
                height: '50px',
                width: '50px',
                position: 'fixed',
                top: mouse.pos.my,
                left: mouse.pos.mx,
              }}
            >
              <NavigationIcon
                style={{
                  height: '50%',
                  width: '50%',
                  stroke: 'white',
                  fill: mouse.color,
                  transform: 'rotate(-30deg)',
                  zIndex: 999999,
                }}
              />
              <p style={{ textAlign: 'center', color: mouse.color }}>
                {mouse.fullname}
              </p>
            </div>
          )
        })
      : <></>}
    </>
  )
}
