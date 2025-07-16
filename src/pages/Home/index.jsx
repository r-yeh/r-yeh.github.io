import React from 'react';
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";

import '../../styles/Home.css';
import background from '../../assets/images/background_pattern_2.jpg';

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
        <div className='text'>
            <Typography variant="h2">Hi I'm
                <Typography variant="h1" sx={{color: "secondary.light", fontWeight: "bold"}}>Ryan Yeh</Typography>
            </Typography>
            <Typography variant="h2">I'm a
                <Typography variant="h2" sx={{color: "tertiary.main"}}>
                    <Typewriter
                        options={{
                            strings: ['Software Developer', 'QA Tester', 'Lifelong Learner'],
                            autoStart: true,
                            loop: true,
                            loopCount: Infinity,
                            deleteSpeed: "natural",
                            pauseFor: 1000,
                        }}
                    />
                </Typography>
            </Typography>
        </div>
      </div>
  );
};

export default Home;