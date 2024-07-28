import React from 'react';
import Navbar from './Navbar';
import TicGame from './TicGame';

const TicTacToe: React.FC = () => {
    return (
        <div className='bg-blackie'>
            <Navbar />
            <div className='relative isolate min-h-[90vh] flex items-center justify-center'>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[300px] h-[300px] rounded-full absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[200px] bg-gradient-to-r from-gray-500 via-purple-500 to-slate-500"></div>
                </div>
                <div className="relative z-10 p-4 -mt-0 md:-mt-10 lg:py-8 mx-auto">
                    {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-x-12'>  */}
                        
                        <TicGame />

                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default TicTacToe;
