import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

import '../../styles/NavBar.css'


const pages = ['Projects', 'About'];

function NavBar() {
    return (
        <AppBar position="fixed" elevation={0}>
            <div className='nav-bar'>
                <Toolbar disableGutters>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Ryan Yeh
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/projects">Projects</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                </Toolbar>
            </div>
        </AppBar>
    )
}

export default NavBar;