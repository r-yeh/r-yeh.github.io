import React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typewriter from "typewriter-effect";

import '../../styles/Home.css';
import background from '../../assets/images/background_pattern_2.jpg';
import resume from '../../assets/files/resume.pdf';
import { github_url, linkedin_url } from "../../constants/index.js";

const Home = () => {
    const pageStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'black',
    }

    const onResumeDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Resume.pdf'
        link.click();
    }

    return (
        <div style={pageStyle}>
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
                <Button sx={{marginTop: "12%"}}
                        variant="contained"
                        color="secondary"
                        size="large"
                        startIcon={<DownloadIcon/>}
                        onClick={onResumeDownload}
                >
                    Download Resume
                </Button>
            </div>
            <div className='icons'>
                <Link target="_blank" rel="noopener noreferrer" href={github_url}>
                    <IconButton children={<GitHubIcon/>} size="large" color="tertiary"/>
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href={linkedin_url}>
                    <IconButton children={<LinkedInIcon/>} size="large" color="tertiary"/>
                </Link>
            </div>
        </div>
    );
};

export default Home;