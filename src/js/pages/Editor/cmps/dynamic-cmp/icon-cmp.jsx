import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import SpeedIcon from '@mui/icons-material/Speed'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import { useLocation } from 'react-router'

export function IconCmp({ cmp, onHoverCmp, selectedCmp, onSelectCmp, displayClass }) {
  const location = useLocation()
  const IconType = () => {
    switch (cmp.info.iconName) {
      case 'facebook':
        return <FacebookIcon />
      case 'instagram':
        return <InstagramIcon />
      case 'linkedin':
        return <LinkedInIcon />
      case 'speed':
        return <SpeedIcon />
      case 'energy':
        return <BatteryChargingFullIcon />
      case 'car':
        return <DirectionsCarIcon />
      default:
        return
    }
  }

  return (
    <a target="_blank" href={cmp.info.link && location.pathname.includes('/publish') ? cmp.info.link : undefined}>
      <div
        onMouseOut={(ev) => ev.target.classList.remove('hover')}
        onMouseOver={(ev) => onHoverCmp(ev)}
        className={`${cmp.info.link && location.pathname.includes('/publish') ? 'linkable' : ''} ${selectedCmp?.id === cmp.id ? 'selected' : ''} ${displayClass} icon ${cmp.name}`}
        onClick={(ev) => onSelectCmp(ev, cmp)}
        style={cmp.style}
      >
        {<IconType />}
      </div>
    </a>
  )
}
