import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { AuthLogin } from '../layout/AuthLogin'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth/thunks'
import { useMemo } from 'react'

export const LoginPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  })

  const onSubmit = (event) => {
    event.preventDefault()
    // Esta no es la acción al disparar
    // dispatch(checkingAuthenticated(email,password));
    // Dispatch startLoginWithEmailAndPassword
    dispatch(startLoginWithEmailAndPassword({ email, password }))
  }

  const onGoogleSignIn = () => {
    console.log('On google sing in')
    dispatch(startGoogleSignIn())
  }

  return (

    <AuthLogin title='Login'>
      {/* Contenedor formulario */}
      <form
        onSubmit={onSubmit}
        className='animate__animated animate__fadeIn animate__faster'
      >
        {/* Contenedor user and password */}
        <Grid container spacing={2} padding={2}>
          <Grid item xs={12}>
            <TextField
              label='Correo'
              type='email'
              placeholder='correo@mail.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='password'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid
            container
            justifyContent='center'
            sx={{ mb: 2, mt: 2 }}
            display={errorMessage ? '' : 'none'}
          >
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>

          {/* Contenedor Botones Login */}
          <Grid item container spacing={2} sx={{ mb: 2, mt: 2 }}>

            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth type='submit' disabled={isAuthenticating}>Login</Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth startIcon={<Google />} onClick={onGoogleSignIn} disabled={isAuthenticating}>Google</Button>
            </Grid>

          </Grid>
          {/* Contenedor link crear cuenta */}
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} to='/auth/register'>Crear una cuenta</Link>
          </Grid>
        </Grid>
      </form>

    </AuthLogin>
  )
}
