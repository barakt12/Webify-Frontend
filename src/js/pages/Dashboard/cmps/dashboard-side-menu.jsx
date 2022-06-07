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
import { useState } from 'react'
import {
  AppBar,
  CssBaseline,
  IconButton,
  ListItemIcon,
  Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const drawerWidth = 240

export default function DashboardSideMenu(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const savedWaps = useSelector((storeState) => storeState.wapModule.savedWaps)

  const container =
    window !== undefined ? () => window().document.body : undefined

  const drawer = (
    <>
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
        sx={{
          paddingTop: '25px',
          backgroundColor: 'rgb(249, 250, 251)',
          height: '100%',
        }}
      >
        {savedWaps &&
          savedWaps.map((wap, index) => (
            <ListItem
              key={index}
              onClick={() => {
                props.onSelectWapToDisplay(wap)
                setMobileOpen(false)
              }}
            >
              <ListItemButton sx={{ gap: '0.5rem' }}>
                <WebIcon />
                <ListItemText primary={wap.name} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </>
  )

  return (
    <Box sx={{ display: 'flex', position: { xs: 'absolute', lg: 'unset' } }}>
      <CssBaseline />

      <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={handleDrawerToggle}
        sx={{
          mr: 2,
          display: { lg: 'none' },
          alignSelf: 'flex-start',
          height: '40px',
          width: '40px',
          margin: '30px 0 0 20px',
        }}
      >
        <MenuIcon />
      </IconButton>

      <Box
        component='nav'
        sx={{
          width: { lg: drawerWidth },
          flexShrink: { lg: 0 },
          height: '100%',
        }}
        aria-label='My Sites'
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            display: { md: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              position: 'relative',
              paddingTop: '35px',
              backgroundColor: 'rgb(249, 250, 251)',
            },
          }}
          variant='temporary'
          anchor='left'
          container={container}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            display: { xs: 'none', lg: 'block' },
            height: '100%',

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
          container={container}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
