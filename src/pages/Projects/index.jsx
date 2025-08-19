import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import '../../styles/Projects.css';
import ProjectCard from '../../components/project-card/index.jsx';

const Projects = () => {
    return (
        <div className='project-page'>
            <Grid spacing={2} container columns={12} sx={{height: '50%', width: '100%'}}>
                <Grid size={{xs: 12, md: 6}}>
                    <ProjectCard
                        title='Project 1'
                        image='https://blocks.astratic.com/img/general-img-landscape.png'
                        description='This is a description of the project.'
                        tags={['Flutter', 'JavaScript', 'PostgreSQL', 'Git']}
                        url='https://google.com'/>
                </Grid>
                <Grid size={{xs: 12, md: 6}}>
                    <ProjectCard
                        title='Project 2'
                        image='https://blocks.astratic.com/img/general-img-landscape.png'
                        description='This is a description of the project.'
                        tags={['React', 'JavaScript', 'HTML', 'CSS', 'Git']}
                        url='https://google.com'/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Projects;