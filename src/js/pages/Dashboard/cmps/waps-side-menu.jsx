import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { useSelector } from 'react-redux'
import WebIcon from '@mui/icons-material/Web'

const drawerWidth = 240

export default function WapsSideMenu({ onSelectWapToDisplay }) {
  const savedWaps = useSelector((storeState) => storeState.wapModule.savedWaps)

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'relative',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <Typography
          sx={{
            fontSize: '2rem',
            padding: '1rem',
          }}
        >
          My Sites
        </Typography>
        <List>
          {savedWaps.map((wap, index) => (
            <ListItem key={index} onClick={() => onSelectWapToDisplay(wap)}>
              <ListItemButton sx={{ gap: '0.5rem' }}>
                <WebIcon />
                <ListItemText primary={'ELLIE PAGE'} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  )
}
