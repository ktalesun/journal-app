import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { loadNotes } from '../../journal/helpers/loadNotes'
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './journalSlice'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    // La funcion getState te retorna el estado en ese momento
    dispatch(savingNewNote())
    const { uid } = getState().auth
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)

    newNote.id = newDoc.id
    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    try {
      const notes = await loadNotes(uid)
      dispatch(setNotes(notes))
    } catch (error) {
      throw new Error('El ID del usuario no existe')
    }
    // if (!uid) throw new Error('El ID del usuario no existe')
  }
}
