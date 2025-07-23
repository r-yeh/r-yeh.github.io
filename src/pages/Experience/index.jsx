import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';

import '../../styles/common.css'
import '../../styles/Experience.css'
import CustomTab from '../../components/custom-tab/index.jsx';

const Experience = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="page">
            <Paper className="paper" sx={{backgroundColor: "background.paper"}} elevation={1}>
                <Box sx={{width: '100%', borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper'}}>
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
                <Typography variant="h1">Test</Typography>
            </Paper>
        </div>
    );
}

export default Experience;