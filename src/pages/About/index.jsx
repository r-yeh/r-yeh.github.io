import React from 'react';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {alpha, useTheme} from '@mui/material/styles';
import {motion} from "motion/react";

import '../../styles/About.css'
import AboutPicture from '../../assets/images/about-picture.jpg';
import Box from "@mui/material/Box";
import {tools} from "../../constants/index.js";
import {pageVariants, listVariants, listItemVariants} from "../../assets/animation/animation.js";

const About = () => {
    const theme = useTheme();

    return (
        <div className='about-page'>
            <Grid
                container
                spacing={2}
                sx={{height: '100%'}}
            >
                <Grid size={{xs: 12, md: 4}}>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        height: '85vh',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <motion.img
                            src={AboutPicture} alt='Picture of Me'
                            style={{
                                maxHeight: '100%',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                borderRadius: '8px'
                            }}
                            variants={pageVariants}
                            initial="hidden"
                            animate="show"/>
                    </div>
                </Grid>
                <Grid size={{xs: 12, md: 8}}>
                    <Paper
                        component={motion.div}
                        variants={pageVariants}
                        initial="hidden"
                        animate="show"
                        sx={{
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
                        <div className='about-description'>
                            <div className='about-description-content'>
                                <Typography variant="body1">
                                    I'm a recent Software Engineering graduate from McMaster University with a strong
                                    interest in software development and testing. I'm actively seeking opportunities
                                    where I
                                    can grow as an engineer, expand my skill set, and contribute to impactful projects.
                                    Driven by a passion for continuous learning, I strive to improve every day and
                                    remain
                                    open to exploring new areas in tech.
                                </Typography>
                                <Typography variant="body1">
                                    Some languages and tools I've used in the past include:
                                    <motion.ul
                                        style={{columnCount: 2, columnGap: '0.5rem'}}
                                        variants={listVariants}
                                        initial="hidden"
                                        animate="show"
                                    >
                                        {tools.map((tool, index) => (
                                            <motion.li key={index} variants={listItemVariants}>
                                                <Typography variant='body2'>{tool}</Typography>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </Typography>
                                <Typography variant="body1">
                                    Outside of work, I’m passionate about physical training, playing music, and
                                    unwinding
                                    with games — allowing me to stay balanced and focused.
                                </Typography>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;