import NavigationIcon from '@mui/icons-material/Navigation'


export const MouseCursor = ({ mouse }) => {
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
          stroke: 'black',
          strokeWidth: '0.8px',
          transform: 'rotate(-30deg)',
        }}
      />
      <p style={{ textAlign: 'center', color: mouse.color,WebkitTextStroke: '0.5px black' }}>{mouse.user}</p>
    </div>
  )
}
