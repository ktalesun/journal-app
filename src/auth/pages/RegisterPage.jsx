import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLogin } from '../layout/AuthLogin'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailAndPassword } from '../../store/auth/thunks'

const formData = {
  email: 'none@mail.com',
  password: 123456,
  displayName: 'Jhon Doe'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe contener @'],
  password: [(value) => value.length >= 6, 'El password debe tener como minimo 6 caracteres'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {
  // Dispatcher actions
  const dispatch = useDispatch()

  // Para manejar el mensaje de error y que se muestre en pantalla
  const { status, errorMessage } = useSelector(state => state.auth)
  const isCheckingAutentication = useMemo(() => status === 'checking', [status])

  // Para controlar que el formulario haya sido posteado (submit)
  const [formSubmited, setFormSubmited] = useState(false)

  // Custom hook para manejar el formulario y las validaciones
  const {
    formState, email, password, displayName, onInputChange,
    isFormValid, emailValid, passwordValid, displayNameValid
  } = useForm(formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmited(true)
    if (!isFormValid) return
    dispatch(startCreatingUserWithEmailAndPassword(formState))
  }

  return (
    <AuthLogin title='Registro'>
      {/* Contenedor formulario */}
      <form
        onSubmit={onSubmit}
        className='animate__animated animate__fadeIn animate__faster'
      >
        {/* Contenedor user and password */}
        <Grid container spacing={2} padding={2}>
          <Grid item xs={12}>
            <TextField
              label='Nombre completo'
              type='text'
              placeholder='Jhon Doe'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Correo'
              type='email'
              placeholder='correo@mail.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>
          {/* Contenedor Botones Login */}
          <Grid item container spacing={2} sx={{ mb: 2, mt: 2 }}>
            {/* Contenedor para el mensaje de error  */}
            <Grid item xs={12} display={errorMessage ? '' : 'none'}>
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>

            <Grid item xs={12}>
              <Button
                disabled={isCheckingAutentication}
                variant='contained'
                fullWidth
                type='submit'
                onClick={onSubmit}
              >Crear cuenta
              </Button>
            </Grid>

          </Grid>
          {/* Contenedor link crear cuenta */}
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} to='/auth/login'>Ingresa</Link>
          </Grid>
        </Grid>
      </form>

    </AuthLogin>
  )
}
