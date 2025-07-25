import React from 'react';
import Tab from '@mui/material/Tab';

const CustomTab = (props) => {
    const {label, ...other} = props;

    return (
        <Tab
            sx={{
                color: 'white',
                textTransform: 'none',
                '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'tertiary.main',
                    fontWeight: 'bold'
                },
                '&:focus': {
                    outline: 'none',
                }
            }}
            label={label}
            {...other}
        />
    );
}

export default CustomTab;