import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import {motion} from "motion/react";

import '../../styles/ExperiencePanel.css';
import {listVariants, listItemVariants} from "../../assets/animation/animation.js";

const ExperiencePanel = (props) => {
    const {title, company, duration, points, value, index, ...other} = props;

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
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: "24px",
                flex: 1,
                maxHeight: 'calc(100vh - 45%)',
            }}>
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='h6' sx={{fontWeight: 600, fontStyle: 'italic'}}>@ {company}</Typography>
                <Typography sx={{marginTop: '1rem'}} variant='h6'>{duration}</Typography>
                <Divider sx={{marginTop: '0.5rem', bgcolor: 'white'}}/>
                <Box sx={{display: 'flex', flex: 1, flexDirection: 'column', overflowY: 'auto', minHeight: 0}}>
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
            </Box>
        </div>
    );
}

export default ExperiencePanel;