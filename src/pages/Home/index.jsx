import React from 'react';
import '../../styles/Home.css';
import background from '../../assets/images/landscape 4.jpg';

const Home = () => {
  const pageStyle = {
      backgroundImage: `url(${background})`,
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
            <h1>Home Page</h1>
            <p>This is a home page</p>
        </div>
      </div>
  );
};

export default Home;