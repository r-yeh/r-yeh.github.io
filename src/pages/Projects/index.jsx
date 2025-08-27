import React from 'react';
import Grid from "@mui/material/Grid";
import {useTheme} from '@mui/material/styles';
import {motion} from "motion/react";

import '../../styles/Projects.css';
import ProjectCard from '../../components/project-card/index.jsx';
import {projects} from "../../constants/index.js";

const Projects = () => {
    const theme = useTheme();

    return (
        <div className='project-page'>
            <Grid spacing={2} container columns={12} sx={{height: '50%', width: '100%', padding: '1rem'}}>
                {projects.map((project, index) => (
                    <Grid
                        component={motion.div}
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0, transition: {duration: 0.7, delay: index * 0.15}}}
                        whileHover={{boxShadow: `${theme.palette.secondary.main} 0px 0px 8px 2px`, scale: 1.01}}
                        size={{xs: 12, md: 6}}
                        key={index}
                    >
                        <ProjectCard
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            tags={project.tags}
                            url={project.url}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Projects;