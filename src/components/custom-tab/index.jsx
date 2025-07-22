import React from 'react';
import Tab from '@mui/material/Tab';

const CustomTab = ({label, ...otherProps}) => {
    return (
        <Tab sx={{
            color: "white",
            '&.Mui-selected': {
                backgroundColor: 'tertiary.main',
                color: 'black',
                fontWeight: 'bold'
            }
        }} label={label} {...otherProps} />
    );
}

export default CustomTab;