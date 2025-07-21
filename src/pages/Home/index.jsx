import React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typewriter from "typewriter-effect";
import {stagger} from "motion";
import {motion} from "motion/react"

import '../../styles/common.css';
import '../../styles/Home.css';
import resume from '../../assets/files/resume.pdf';
import {github_url, linkedin_url} from "../../constants/index.js";

const Home = () => {
    const iconVariants = {
        hidden: {scale: 0, opacity: 0, x: -50},
        show: {scale: 1, opacity: 1, x: 0, transition: {duration: 0.8}},
    };

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                delayChildren: stagger(0.25),
            },
        },
    };

    const onResumeDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Resume.pdf'
        link.click();
    }

    return (
        <div className="page">
            <div className='elements'>
                <Typography variant="h2">Hi I'm
                    <Typography variant="h1" sx={{color: "secondary.light", fontWeight: "bold"}}>Ryan Yeh</Typography>
                </Typography>
                <Typography variant="h2">I enjoy
                    <Typography variant="h2" sx={{color: "tertiary.main"}}>
                        <Typewriter
                            options={{
                                strings: ['Software Development', 'QA Testing', 'Continuous Learning'],
                                autoStart: true,
                                loop: true,
                                loopCount: Infinity,
                                deleteSpeed: "natural",
                                pauseFor: 1000,
                            }}
                        />
                    </Typography>
                </Typography>
                <Typography variant="body1" sx={{marginTop: "5%"}}>
                    Welcome to my portfolio! I am a recent Software Engineering graduate from McMaster University
                    currently searching for new opportunities to grow my skills and develop my career.
                </Typography>
                <Button sx={{marginTop: "5%"}}
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
            </div>
            <motion.div className='icons' variants={containerVariants} initial="hidden" animate="show">
                <Link target="_blank" rel="noopener noreferrer" href={github_url}>
                    <IconButton
                        children={<GitHubIcon/>}
                        size="large"
                        color="tertiary"
                        component={motion.button}
                        variants={iconVariants}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href={linkedin_url}>
                    <IconButton
                        children={<LinkedInIcon/>}
                        size="large"
                        color="tertiary"
                        component={motion.button}
                        variants={iconVariants}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    />
                </Link>
            </motion.div>
        </div>
    );
};

export default Home;