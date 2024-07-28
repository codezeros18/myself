import React from 'react';
import Navbar from '../Navbar'
import Landing from '../Landing'

const Home: React.FC = () => {
    return (
        <div className='bg-blackie'>
            <Navbar />
            <Landing />
        </div>
                // bg-opacity-70 backdrop-blur-lg
    );
};

export default Home;