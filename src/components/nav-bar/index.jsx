import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom';

import '../../styles/NavBar.css'
import {alpha, useTheme} from "@mui/material/styles";

function NavBar() {
    const buttonStyle = {
        color: 'white',
        '&:hover': {
            color: 'secondary.main'
        },
    }

    const theme = useTheme()

    return (
        <AppBar position="fixed" elevation={0} sx={{
            backgroundColor: alpha(theme.palette.primary.main, 0.88),
            backdropFilter: 'blur(24px)',
            boxShadow:  `${theme.palette.secondary.dark} 0px 4px 10px 0px`,
        }}>
            <div className='nav-bar'>
                <Toolbar disableGutters>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Ryan Yeh
                    </Typography>
                    <Button sx={buttonStyle} color="inherit" component={Link} to="/">Home</Button>
                    <Button sx={buttonStyle} color="inherit" component={Link} to="/experience">Experience</Button>
                    <Button sx={buttonStyle} color="inherit" component={Link} to="/projects">Projects</Button>
                    <Button sx={buttonStyle} color="inherit" component={Link} to="/about">About</Button>
                </Toolbar>
            </div>
        </AppBar>
    )
}

export default NavBar;