import React from 'react';
import '../../styles/Home.css';
import background from '../../assets/images/landscape 4.jpg';
import Typography from "@mui/material/Typography";

const Home = () => {
  const pageStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black'
  }

  return (
      <div style={pageStyle}>
        <div className='container'>
            <Typography variant="h1">Home Page</Typography>
            <Typography variant="p">Test Text</Typography>
        </div>
      </div>
  );
};

export default Home;