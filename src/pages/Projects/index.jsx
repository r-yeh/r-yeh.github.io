import React from 'react';
import Typography from "@mui/material/Typography";

import '../../styles/Projects.css';
import ProjectCard from '../../components/project-card/index.jsx';

const Projects = () => {
    return (
        <div>
            <Typography variant="h1">Projects</Typography>
            <ProjectCard/>
        </div>
    )
}

export default Projects;