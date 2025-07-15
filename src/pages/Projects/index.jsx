import React from 'react';
import '../../styles/Projects.css'
import Typography from "@mui/material/Typography";

const Projects = () => {
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
                <Typography variant='h1'>Projects Page</Typography>
            </div>
        </div>
    )
}

export default Projects;