import React from 'react';
import Grid from "@mui/material/Grid";
import {motion} from "motion/react";

import '../../styles/Projects.css';
import ProjectCard from '../../components/project-card/index.jsx';
import {projects} from "../../constants/index.js";

const Projects = () => {
    return (
        <div className='project-page'>
            <Grid spacing={2} container columns={12} sx={{height: '50%', width: '100%'}}>
                {projects.map((project, index) => (
                    <Grid
                        component={motion.div}
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0, transition: {duration: 0.7, delay: index * 0.15}}}
                        size={{xs: 12, md: 6}}
                        key={index}
                    >
                        <ProjectCard
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            tags={project.tags}
                            url={project.url}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Projects;