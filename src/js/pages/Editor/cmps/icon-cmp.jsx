import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import SpeedIcon from '@mui/icons-material/Speed'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'

export function IconCmp({ iconName }) {
  switch (iconName) {
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
