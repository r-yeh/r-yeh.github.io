import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";


const pages = ['Projects', 'About'];

function NavBar() {
    return (
        <AppBar position="fixed" color="primary">
            <Toolbar>
                <Typography>
                    TEST
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;