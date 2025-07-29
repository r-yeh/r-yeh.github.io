import React from 'react';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import {alpha, useTheme} from '@mui/material/styles';
import {motion} from "motion/react";

import '../../styles/Experience.css'
import CustomTab from '../../components/custom-tab/index.jsx';
import ExperiencePanel from '../../components/experience-panel/index.jsx';
import {opg_experience, ministry_experience, sentry_health_experience} from "../../constants/index.js";

const Experience = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = useTheme();

    const panelVariants = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.8,
            },
        },
    };

    return (
        <div>
            <Paper
                className="paper"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: alpha(theme.palette.primary.main, 0.75),
                    backdropFilter: 'blur(16px)'
                }}
                component={motion.div}
                variants={panelVariants}
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
                        <CustomTab label="Ontario Power Generation"/>
                        <CustomTab label="Ontario Ministry of Health"/>
                        <CustomTab label="Sentry Health"/>
                    </Tabs>
                </Box>
                <ExperiencePanel
                    title="Data & Software Development Intern"
                    duration="May 2024 - August 2024"
                    points={opg_experience}
                    value={value}
                    index={0}
                />
                <ExperiencePanel
                    title="Software Developer Co-op Student"
                    duration="May 2023 - August 2023"
                    points={ministry_experience}
                    value={value}
                    index={1}
                />
                <ExperiencePanel
                    title="Software Engineer & QA Intern"
                    duration="May 2021 - August 2022"
                    points={sentry_health_experience}
                    value={value}
                    index={2}
                />
            </Paper>
        </div>
    );
}

export default Experience;