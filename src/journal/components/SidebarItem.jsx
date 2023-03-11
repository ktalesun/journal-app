import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

export const SidebarItem = ({ note }) => {
  const dispatch = useDispatch()
  const onSetActiveNote = ({ note }) => {
    dispatch(setActiveNote(note))
  }
  return (
    <ListItem disablePadding onClick={onSetActiveNote(note)}>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={note.title} primaryTypographyProps={{ style: { width: '120px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' } }} />
          <ListItemText secondary={note.body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
