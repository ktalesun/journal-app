import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLogin } from "../layout/AuthLogin"
import { Link as RouterLink } from "react-router-dom";


export const RegisterPage = () => {
  return (
    <AuthLogin title="Registro">
      {/* Contenedor formulario */}
      <form>
        {/* Contenedor user and password */}
        <Grid container spacing={2} padding={2}>
          <Grid item xs={12}>
              <TextField  
                label="Nombre completo"
                type="text"
                placeholder="Jhon Doe"
                fullWidth
              />   
          </Grid>
          <Grid item xs={12}>
              <TextField  
                label="Correo"
                type="email"
                placeholder="correo@mail.com"
                fullWidth
              />   
          </Grid>
          <Grid item xs={12} >
              <TextField  
                label="Contraseña"
                type="password"
                placeholder="password"
                fullWidth
              />
          </Grid>
          {/* Contenedor Botones Login */}
          <Grid item container spacing={2} sx={{ mb: 2, mt:2 }}>
            
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>Crear cuenta</Button>
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
