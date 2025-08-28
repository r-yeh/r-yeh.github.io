import React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typewriter from "typewriter-effect";
import {motion} from "motion/react";

import '../../styles/Home.css';
import resume from '../../assets/files/resume.pdf';
import {github_url, linkedin_url} from "../../constants/index.js";
import {listVariants} from "../../assets/animation/animation.js";

const Home = () => {
    const iconVariants = {
        hidden: {scale: 0, opacity: 0, x: -50},
        show: {scale: 1, opacity: 1, x: 0, transition: {duration: 0.8}},
    };

    const onResumeDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Resume.pdf'
        link.click();
    }

    return (
        <div className='home-page'>
            <Box sx={{display: 'flex', flexDirection: 'column', '& > *:last-child': {marginTop: '5%'}}}>
                <Typography variant="h2">Hi I'm
                    <Typography variant="h1" sx={{color: "secondary.light"}}>Ryan Yeh</Typography>
                </Typography>
                <Typography variant="h2">I'm interested in
                    <Typography variant="h2" sx={{color: "tertiary.main"}}>
                        <Typewriter
                            options={{
                                strings: ['Software Development', 'QA Testing', 'Learning New Skills'],
                                autoStart: true,
                                loop: true,
                                loopCount: Infinity,
                                deleteSpeed: "natural",
                                pauseFor: 1000,
                            }}
                        />
                    </Typography>
                </Typography>
                <Typography variant="body1">
                    Welcome to my portfolio! I am a recent Software Engineering graduate from McMaster University
                    currently searching for new opportunities to grow my skills and develop my career.
                </Typography>
            </Box>
            <Button
                sx={{marginTop: "5%", borderRadius: '25px'}}
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<DownloadIcon/>}
                component={motion.button}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                onClick={onResumeDownload}
            >
                Download Resume
            </Button>
            <motion.div className='icon-buttons' variants={listVariants} initial="hidden" animate="show">
                <Link target="_blank" rel="noopener noreferrer" href={github_url}>
                    <IconButton
                        children={<GitHubIcon/>}
                        size="large"
                        color="tertiary"
                        component={motion.button}
                        variants={iconVariants}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                    />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href={linkedin_url}>
                    <IconButton
                        children={<LinkedInIcon/>}
                        size="large"
                        color="tertiary"
                        component={motion.button}
                        variants={iconVariants}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                    />
                </Link>
            </motion.div>
        </div>
    );
};

export default Home;