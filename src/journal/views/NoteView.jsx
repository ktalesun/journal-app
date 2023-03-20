import { DeleteOutline, SaveOutlined, UploadFileOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { useRef, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import { useForm } from '../../hooks'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal/thunks'
import { ImageGallery } from './ImageGallery'

export const NoteView = () => {
  const { active: activeNote, messageSaved, isSaving } = useSelector(state => state.journal)
  const { body, title, date, formState, onInputChange } = useForm(activeNote)
  const fileInputRef = useRef()
  const dispatch = useDispatch()

  const dateString = useMemo(() => {
    const dateNote = new Date(date).toUTCString()
    return dateNote
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success')
    }
  }, [messageSaved])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return
    // console.log('Subiendo archivos')
    dispatch(startUploadingFiles(target.files))
  }

  const onDeleteNote = () => {
    dispatch(startDeletingNote())
  }

  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
      className='animate__animated animate__fadeIn animate__faster'
    >
      <Grid item>
        <Typography fontSize={36} fontWeight='light'>{dateString}</Typography>
      </Grid>

      <Grid item>

        <input
          type='file'
          multiple
          onChange={onFileInputChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />

        <IconButton
          color='primary'
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadFileOutlined />
        </IconButton>

        <Button
          disabled={isSaving}
          color='primary'
          startIcon={<SaveOutlined sx={{ fontSize: 30 }} />}
          sx={{ padding: 2 }}
          onClick={onSaveNote}
        >
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un título aquí'
          label='Título'
          name='title'
          value={title}
          onChange={onInputChange}
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField
          type='text'
          variant='filled'
          multiline
          fullWidth
          placeholder='¿Qué sucedió hoy?'
          minRows={5}
          name='body'
          value={body}
          onChange={onInputChange}
          sx={{ border: 'none', mb: 1 }}
        />

      </Grid>

      <Grid container justifyContent='end'>
        <Button
          onClick={onDeleteNote}
          sx={{ mt: 2 }}
          color='error'
        >
          <DeleteOutline />
          Delete
        </Button>
      </Grid>

      <ImageGallery images={activeNote.imageUrls} />

    </Grid>
  )
}
