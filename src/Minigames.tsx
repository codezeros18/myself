import React from 'react';
import Navbar from './Navbar'
import MiniLand from './MiniLand';


const Minigames: React.FC = () => {
    return (
        <div className='bg-blackie overflow-hidden'>
            <Navbar />
            <MiniLand />
        </div>
    );
};

export default Minigames;