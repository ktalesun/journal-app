import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material";


export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
        component="nav"
        sx={{
            width: {sm: drawerWidth },
            flexShrink: { sm: 0}
        }}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth
                }
            }}
        >
            <Toolbar sx={{display: 'flex', flexDirection: 'column', marginTop: 2, marginBottom: 2}} >
                <Typography variant="h6" component="div">Kevín León</Typography>
                <Divider sx={{width: '100%', marginTop: 2}}/>

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid  container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary="Lorem ipsum it dolor ammet loas ashas asas" />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Toolbar>

        </Drawer>

    </Box>

  )
}
