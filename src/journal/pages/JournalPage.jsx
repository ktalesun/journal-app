
import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  const { isSaving, active } = useSelector(state => state.journal)
  const dispatch = useDispatch()
  const onClickNewNote = () => {
    dispatch(startNewNote())
  }
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis eius quibusdam fugiat quae quidem quos minus eos cum laborum minima ad qui nobis enim, quisquam explicabo, aut expedita dignissimos sequi.</Typography> */}
      {/* <NothingSelectedView /> */}

      {
        (!!active) ? <NoteView /> : <NothingSelectedView />
      }

      <IconButton
        disabled={isSaving}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { opacity: 0.9, backgroundColor: 'error.main' },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        onClick={onClickNewNote}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  )
}
