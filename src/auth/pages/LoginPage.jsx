import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
import { AuthLogin } from "../layout/AuthLogin";

export const LoginPage = () => {
  return ( 
    
    <AuthLogin title="Login">
      {/* Contenedor formulario */}
      <form>
        {/* Contenedor user and password */}
        <Grid container spacing={2} padding={2}>
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
            
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>Login</Button>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth startIcon={<Google />}>Google</Button>
            </Grid>
          
          </Grid>
          {/* Contenedor link crear cuenta */}
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} to="/auth/register">Crear una cuenta</Link>
          </Grid>
        </Grid>
      </form>

    </AuthLogin>
  )
}
