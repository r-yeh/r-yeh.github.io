import React from 'react';
import Tab from '@mui/material/Tab';

const CustomTab = (props) => {
    const {label, ...other} = props

    return (
        <Tab
            sx={{
                color: 'white',
                textTransform: 'none',
                '&.Mui-selected': {
                    backgroundColor: 'tertiary.main',
                    color: 'black',
                    fontWeight: 'bold'
                }
            }}
            label={label}
            {...other}
        />
    );
}

export default CustomTab;