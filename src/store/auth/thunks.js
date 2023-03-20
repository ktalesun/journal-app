import { loginWithEmailAndPassword, logOutFirebase, registerWithEmailAndPassword, signInWithGoogle } from '../../firebase/provider'
import { clearNotesLogout } from '../journal/journalSlice'
import { checkingCredentials, login, logout } from './authSlice'

export const checkingAuthenticated = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch, getState) => {
    dispatch(checkingCredentials())
    const result = await signInWithGoogle()
    if (!result.ok) return dispatch(logout(result.errorMessage))
    dispatch(login(result))
  }
}

export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const { ok, uid, photoURL, errorMessage } = await registerWithEmailAndPassword({ email, password, displayName })
    if (!ok) {
      return dispatch(logout({ errorMessage }))
    }
    dispatch(login({ uid, displayName, email, photoURL }))
  }
}

export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const { ok, uid, displayName, photoURL, errorMessage } = await loginWithEmailAndPassword({ email, password })
    if (!ok) return dispatch(logout({ errorMessage }))

    dispatch(login({ uid, displayName, email, photoURL }))
  }
}

export const startLogOutFirebase = () => {
  return async (dispatch) => {
    await logOutFirebase()
    dispatch(clearNotesLogout())
    dispatch(logout({}))
  }
}
