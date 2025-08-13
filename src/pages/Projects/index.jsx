import React from 'react';
import Typography from "@mui/material/Typography";

import '../../styles/Projects.css';
import ProjectCard from '../../components/project-card/index.jsx';
import Grid from "@mui/material/Grid";

const Projects = () => {
    return (
        <div>
            <Typography variant="h1">Projects</Typography>
            <Grid spacing={2} container columns={12}>
                <Grid item xs={12} md={4}>
                    <ProjectCard
                        title='Project 1'
                        image='https://blocks.astratic.com/img/general-img-landscape.png'
                        description='This is a description of the project.'
                        url='https://google.com'/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Projects;