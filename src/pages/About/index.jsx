import React from 'react';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import '../../styles/About.css'

const About = () => {
    return (
        <div className='about-page'>
            <Grid container>
                <Grid size={{xs: 12, md: 3}}>
                    <Paper>
                        <Typography variant="h1">Image here</Typography>
                    </Paper>
                </Grid>
                <Grid size={{xs:12, md: 9}}>
                    <Paper>
                        <Typography variant="h1">Description here</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;