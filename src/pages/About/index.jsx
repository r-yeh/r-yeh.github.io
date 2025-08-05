import React from 'react';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {alpha, useTheme} from '@mui/material/styles';

import '../../styles/About.css'
import AboutPicture from '../../assets/images/about-picture.jpg';
import Box from "@mui/material/Box";

const About = () => {
    const theme = useTheme();

    return (
        <div className='about-page'>
            <Grid container spacing={2}  sx={{height: '100%'}}>
                <Grid size={{xs: 12, md: 4}}>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        height: '85vh',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img style={{maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', borderRadius: '8px'}}
                             src={AboutPicture} alt='Picture of Me'/>
                    </div>
                </Grid>
                <Grid size={{xs: 12, md: 8}}>
                    <Paper sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        backgroundColor: alpha(theme.palette.primary.main, 0.75),
                        backdropFilter: 'blur(16px)'
                    }}>
                        <Box sx={{
                            width: '100%',
                            borderBottom: 1,
                            borderColor: 'divider',
                            bgcolor: 'primary.main',
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '0.5rem'
                        }}>
                            <Typography variant="h3">About Me</Typography>
                        </Box>
                        <div style={{padding: '1rem'}}>
                            <Typography variant="body1">Description here</Typography>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;