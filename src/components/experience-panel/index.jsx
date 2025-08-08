import React from 'react';
import Box from '@mui/material/Box';
import {motion} from "motion/react";

import '../../styles/ExperiencePanel.css';
import Typography from "@mui/material/Typography";
import {listVariants, listItemVariants} from "../../assets/animation/animation.js";

const ExperiencePanel = (props) => {
    const {title, duration, points, value, index, ...other} = props;

    const [renderKey, setRenderKey] = React.useState(Date.now());

    React.useEffect(() => {
        if (value === index) {
            setRenderKey(Date.now());
        }
    }, [value, index]);

    return (
        <div
            className={`experience-panel if ${value === index ? 'active' : 'hidden'}`}
            role="tabpanel"
            id={`experience-panel-${index}`}
            aria-labelledby={`experience-panel-${index}`}
            {...other}
        >
            <Box sx={{padding: "24px", flexGrow: 1, overflowY: 'auto', maxHeight: 'calc(100vh - 45%)'}}>
                <Typography variant='h3'>{title}</Typography>
                <Typography sx={{marginTop: '1rem'}} variant='h6'>{duration}</Typography>
                <motion.ul
                    key={renderKey}
                    className='experience-list'
                    variants={listVariants}
                    initial="hidden"
                    animate="show"
                >
                    {points.map((point, index) => (
                        <motion.li key={index} className='experience-list-item' variants={listItemVariants}>
                            <Typography variant='body2'>{point}</Typography>
                        </motion.li>
                    ))}
                </motion.ul>
            </Box>
        </div>
    );
}

export default ExperiencePanel;