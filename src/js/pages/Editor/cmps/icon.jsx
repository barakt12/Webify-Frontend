import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

export function Icon({ iconName }) {
  switch (iconName) {
    case 'facebook':
      return <FacebookIcon />
    case 'instagram':
      return <InstagramIcon />
    case 'linkedin':
      return <LinkedInIcon />
  }
}
