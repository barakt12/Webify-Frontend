import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useSelector } from 'react-redux'
import WebIcon from '@mui/icons-material/Web'

const drawerWidth = 240

export default function DashboardSideMenu({ onSelectWapToDisplay }) {
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
            paddingTop: '35px',
            backgroundColor: 'rgb(249, 250, 251)',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        {/* <Divider /> */}
        <Typography
          variant='h5'
          sx={{
            fontSize: '1.5rem',
            fontWeight: 700,
            padding: '0 2rem',
          }}
        >
          My Sites
        </Typography>
        <List
          sx={{ paddingTop: '25px', backgroundColor: 'rgb(249, 250, 251)' }}
        >
          {savedWaps &&
            savedWaps.map((wap, index) => (
              <ListItem key={index} onClick={() => onSelectWapToDisplay(wap)}>
                <ListItemButton sx={{ gap: '0.5rem' }}>
                  <WebIcon />
                  <ListItemText primary={wap.name} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
        {/* <Divider /> */}
      </Drawer>
    </Box>
  )
}
