import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

export const SidebarItem = ({ title = '', id, body, date, imageUrls = [] }) => {
  const dispatch = useDispatch()
  const onSetActiveNote = () => {
    dispatch(setActiveNote({ title, id, body, date, imageUrls }))
  }
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onSetActiveNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={title} primaryTypographyProps={{ style: { width: '120px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' } }} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
