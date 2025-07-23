import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';

import '../../styles/common.css'
import '../../styles/Experience.css'
import CustomTab from '../../components/custom-tab/index.jsx';
import ExperiencePanel from '../../components/experience-panel/index.jsx';

const Experience = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="page">
            <Paper
                className="paper"
                sx={{display: 'flex', flexDirection: 'column', backgroundColor: "primary.main"}}
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
                <ExperiencePanel value={value} index={0}>
                    <Typography variant='body1'>Ontario Power Generation</Typography>
                </ExperiencePanel>
                <ExperiencePanel value={value} index={1}>
                    <Typography variant='body1'>Ontario Ministry of Health</Typography>
                </ExperiencePanel>
                <ExperiencePanel value={value} index={2}>
                    <Typography variant='body1'>Sentry Health</Typography>
                </ExperiencePanel>
            </Paper>
        </div>
    );
}

export default Experience;