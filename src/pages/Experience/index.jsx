import React from 'react';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import {alpha, useTheme} from '@mui/material/styles';
import {motion} from "motion/react";

import '../../styles/Experience.css'
import CustomTab from '../../components/custom-tab/index.jsx';
import ExperiencePanel from '../../components/experience-panel/index.jsx';
import {pageVariants} from "../../assets/animation/animation.js";
import {experience} from "../../constants/index.js";

const Experience = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = useTheme();

    return (
        <div className='experience-page'>
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    backgroundColor: alpha(theme.palette.primary.main, 0.75),
                    backdropFilter: 'blur(16px)'
                }}
                component={motion.div}
                variants={pageVariants}
                initial="hidden"
                animate="show"
                elevation={1}
            >
                <Box sx={{width: '100%', borderBottom: 1, borderColor: 'divider', bgcolor: 'primary.main'}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        centered
                        aria-label="Company tabs"
                    >
                        {experience.map((experience, index) => (
                            <CustomTab key={index} label={experience.company}/>
                        ))}
                    </Tabs>
                </Box>
                {experience.map((experience, index) => (
                    <ExperiencePanel
                        title={experience.title}
                        company={experience.company}
                        duration={experience.duration}
                        points={experience.points}
                        value={value}
                        index={index}
                        key={index}
                    />
                ))}
            </Paper
            >
        </div>
    );
}

export default Experience;