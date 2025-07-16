import React from 'react';
import Typography from "@mui/material/Typography";

import '../../styles/About.css'

const About = () => {
    const pageStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw'
    }

    return (
        <div style={pageStyle}>
            <div className='container'>
                <Typography variant="h1">About Page</Typography>
            </div>
        </div>
    )
}

export default About;