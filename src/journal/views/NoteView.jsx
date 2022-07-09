import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "./ImageGallery"


export const NoteView = () => {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1}}>    
            <Grid item>
                <Typography fontSize={36} fontWeight="light">1 de Agosto de 2023</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" startIcon={<SaveOutlined sx={{fontSize: 30}} />} sx={{padding: 2}}>
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título aquí"
                    label = "Título"
                    sx={{border: 'none', mb: 1}}
                />
                <TextField 
                    type="text"
                    variant="filled"
                    multiline
                    fullWidth
                    placeholder="¿Qué sucedió hoy?"
                    minRows={5}
                    sx={{border: 'none', mb: 1}}
                />

            </Grid>

            <ImageGallery />
       
       </Grid>
    )
}
