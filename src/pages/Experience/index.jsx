import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

import '../../styles/common.css'

const Experience = () => {
    return (
        <div className="page">
            <Paper sx={{ backgroundColor: "background.main" }} elevation={1}>
                <Typography variant="h1">Experience Page</Typography>
            </Paper>
        </div>
    )
}

export default Experience;