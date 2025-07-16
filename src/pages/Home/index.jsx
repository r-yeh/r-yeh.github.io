import React from 'react';
import Typography from "@mui/material/Typography";

import '../../styles/Home.css';
import background from '../../assets/images/background_pattern_2.jpg';

const Home = () => {
  const pageStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black',
  }

  return (
      <div style={pageStyle}>
        <div className='text'>
            <Typography variant="h1">Home Page</Typography>
            <Typography variant="p">Test Text</Typography>
        </div>
      </div>
  );
};

export default Home;