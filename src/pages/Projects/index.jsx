import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import '../../styles/Projects.css';
import ProjectCard from '../../components/project-card/index.jsx';
import {projects} from "../../constants/index.js";

const Projects = () => {
    return (
        <div className='project-page'>
            <Grid spacing={2} container columns={12} sx={{height: '50%', width: '100%'}}>
                {projects.map((project, index) => (
                    <Grid size={{xs: 12, md: 6}}>
                        <ProjectCard
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            tags={project.tags}
                            url={project.url}
                            key={index}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Projects;