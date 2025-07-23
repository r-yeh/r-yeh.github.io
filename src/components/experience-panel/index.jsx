import React from 'react';
import Box from '@mui/material/Box';

import '../../styles/ExperiencePanel.css';
import Typography from "@mui/material/Typography";

const ExperiencePanel = (props) => {
    const {title, duration, points, value, index, ...other} = props;

    return (
        <div
            className={`experience-panel if ${value === index ? 'active' : 'hidden'}`}
            role="tabpanel"
            id={`experience-panel-${index}`}
            aria-labelledby={`experience-panel-${index}`}
            {...other}
        >
            <Box sx={{p: 3, flexGrow: 1, overflowY: 'auto'}}>
                <Typography variant='h3'>{title}</Typography>
                <Typography sx={{marginTop: '1rem'}} variant='h6'>{duration}</Typography>
                <ul className='experience-list'>
                    {points.map((point, index) => (
                        <li key={index} className='experience-list-item'>
                            <Typography variant='body2'>{point}</Typography>
                        </li>
                    ))}
                </ul>
            </Box>
        </div>
    );
}

export default ExperiencePanel;