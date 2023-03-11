import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { SidebarItem } from './SidebarItem'

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector(state => state.auth)
  const { notes } = useSelector(state => state.journal)

  return (
    <Box
      component='nav'
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 }
      }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth
          }
        }}
      >
        <Toolbar sx={{ display: 'flex', flexDirection: 'column', marginTop: 2, marginBottom: 2 }}>
          <Typography variant='h6' component='div'>{displayName}</Typography>
          <Divider sx={{ width: '100%', marginTop: 2 }} />

          <List>
            {
              notes.map(note => (
                <SidebarItem key={note.id} note={note} />
              ))
            }
          </List>
        </Toolbar>

      </Drawer>

    </Box>

  )
}
