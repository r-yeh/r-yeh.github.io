import React from 'react';
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typewriter from "typewriter-effect";

import '../../styles/Home.css';
import background from '../../assets/images/background_pattern_2.jpg';
import Button from "@mui/material/Button";

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

    return (
        <div style={pageStyle}>
            <div className='elements'>
                <Typography variant="h2">Hi I'm
                    <Typography variant="h1" sx={{color: "secondary.light", fontWeight: "bold"}}>Ryan Yeh</Typography>
                </Typography>
                <Typography variant="h2">I do
                    <Typography variant="h2" sx={{color: "tertiary.main"}}>
                        <Typewriter
                            options={{
                                strings: ['Software Development', 'QA Testing', 'Constant Learning'],
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
                >
                    Download Resume
                </Button>
            </div>
            <div className='icons'>
                <IconButton children={<GitHubIcon/>} size="large" color="tertiary"/>
                <IconButton children={<LinkedInIcon/>} size="large" color="tertiary"/>
            </div>
        </div>
    );
};

export default Home;