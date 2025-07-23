import React from 'react';
import Box from '@mui/material/Box';

import '../../styles/ExperiencePanel.css';

const ExperiencePanel = (props) => {
    const {children, value, index, ...other} = props;

    return (
        <div
            className={`experience-panel if ${value === index ? 'active' : 'hidden'}`}
            role="tabpanel"
            id={`experience-panel-${index}`}
            aria-labelledby={`experience-panel-${index}`}
            {...other}
        >
            <Box sx={{p: 3, flexGrow: 1, overflow: 'auto'}}>
                {children}
            </Box>
        </div>
    )
}

export default ExperiencePanel;