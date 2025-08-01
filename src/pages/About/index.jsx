import React from 'react';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import '../../styles/About.css'
import AboutPicture from '../../assets/images/about-picture.jpg';

const About = () => {
    return (
        <div className='about-page'>
            <Grid container spacing={2}>
                <Grid size={{xs: 12, md: 4}}>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        height: '84vh',
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
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '84vh'
                    }}>
                        <Typography variant="h2">Description here</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;