import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLogin } from "../layout/AuthLogin"
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";

const formData = {
  email: 'none@mail.com',
  password: 123456,
  displayName: 'Jhon Doe'
}

const formValidations = {
  email: [(value) => value.includes('@') ,'El correo debe contener @'] ,
  password: [(value) => value.length >= 6, 'El password debe tener como minimo 6 caracteres'] ,
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const {formState, email, password, displayName, onInputChange,
          isFormValid, emailValid, passwordValid, displayNameValid
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState)
  }

  return (
    <AuthLogin title="Registro">
      {/* Contenedor formulario */}
      <form onSubmit={onSubmit}>
        {/* Contenedor user and password */}
        <Grid container spacing={2} padding={2}>
          <Grid item xs={12}>
              <TextField  
                label="Nombre completo"
                type="text"
                placeholder="Jhon Doe"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid}
                helperText={displayNameValid}
              />   
          </Grid>
          <Grid item xs={12}>
              <TextField  
                label="Correo"
                type="email"
                placeholder="correo@mail.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid}
                helperText={emailValid}
              />   
          </Grid>
          <Grid item xs={12} >
              <TextField  
                label="Contraseña"
                type="password"
                placeholder="password"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid}
                helperText={passwordValid}
              />
          </Grid>
          {/* Contenedor Botones Login */}
          <Grid item container spacing={2} sx={{ mb: 2, mt:2 }}>
            
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit" onClick={onSubmit}>Crear cuenta</Button>
            </Grid>
          
          </Grid>
          {/* Contenedor link crear cuenta */}
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{mr:1}}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} to="/auth/login">Ingresa</Link>
          </Grid>
        </Grid>
      </form>

    </AuthLogin>
  )
}
