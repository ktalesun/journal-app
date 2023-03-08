
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const AuthLogin = ({ children, title = '' }) => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      {/* Caja form login */}
      <Grid
        item
        className='box-shadow'
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, width: { sm: '450px' } }}
      >
        {/* Texto Login */}
        <Typography variant='h5' sx={{ mb: 2, textAlign: 'center' }}>{title}</Typography>

        {children}

      </Grid>

    </Grid>
  )
}
