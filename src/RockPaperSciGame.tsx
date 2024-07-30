import React, { useState } from 'react';
import me from './assets/me.jpg';
import skibidi from './assets/skibi.png';
import rock from './assets/rock.png';
import paper from './assets/paper2.png';
import scissors from './assets/scissor2.png';

interface Choice {
  name: string;
  img: string;
}

const RockPaperSciGame: React.FC = () => {
    const [player, setPlayer] = useState<Choice | null>(null);
    const [computer, setComputer] = useState<Choice | null>(null);
    const [result, setResult] = useState<string>('');
    const [gameStarted, setGameStarted] = useState<boolean>(false);

    const choices: Choice[] = [
        { name: 'ROCK', img: rock },
        { name: 'PAPER', img: paper },
        { name: 'SCISSORS', img: scissors },
    ];

    const handleClick = (choice: Choice) => {
        setPlayer(choice);
        const computerChoice = computerTurn();
        setComputer(computerChoice);
        setResult(checkWinner(choice.name, computerChoice.name));
    };

    const computerTurn = (): Choice => {
        const randNum = Math.floor(Math.random() * 3);
        return choices[randNum];
    };

    const checkWinner = (player: string, computer: string): string => {
        if (player === computer) {
        return 'Draw!';
        } else if (computer === 'ROCK') {
        return player === 'PAPER' ? 'You Win!' : 'You Lose!';
        } else if (computer === 'PAPER') {
        return player === 'SCISSORS' ? 'You Win!' : 'You Lose!';
        } else if (computer === 'SCISSORS') {
        return player === 'ROCK' ? 'You Win!' : 'You Lose!';
        }
        return '';
    };

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div>
            {!gameStarted && (
                <div className='min-h-screen md:min-h-[90vh] flex flex-col items-center justify-center'>
                    <div className='text-center'>
                        <h1 className='text-[30px] tracking-[2px]'>Get Ready to Rock, Cut, and Cover!</h1>
                        <button
                        id='startBtn'
                        className="relative border-2 text-[16px] border-pink-500 bg-transparent py-2 lg:py-4 my-10 px-6 lg:px-8 text-white uppercase tracking-[4px] font-[400] overflow-hidden transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-500 before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100 hover:border-pink-500 hover:px-6"
                        onClick={startGame}
                        >
                        <span className='relative z-10 transition-colors duration-300'>START</span>
                        </button>
                        <h2 className='text-[20px] tracking-[2px]'>"Prepare to be Surprised - The Computer's Skills Will Blow Your Mind!"</h2>
                    </div>
                </div>
            )}
            {gameStarted && (
                <div className='min-h-screen md:min-h-[90vh] flex flex-col items-center justify-center'>
                    <div className='my-20 md:my-0'>
                        <div className='grid grid-cols-2 grid-rows-1'>
                            <div className='flex flex-col items-center text-center'>
                                <img src={me} className='w-[125px] h-[125px] md:w-[200px] md:h-[200px] object-center object-cover border-2 border-pink-500 mx-4' alt="Player" />
                                {player && <img src={player.img} alt={player.name} className='w-[50px] h-[50px] my-4 mx-4 md:my-12 md:mx-16' />}
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <img src={skibidi} className='w-[125px] h-[125px] md:w-[200px] md:h-[200px] object-center object-cover border-2 border-pink-500 mx-4' alt="Computer" />
                                {computer && <img src={computer.img} alt={computer.name} className='w-[50px] h-[50px] my-4 mx-4 md:my-12 md:mx-16' />}
                            </div>
                        </div>
                        <div className='text-center my-4'>
                            <h1 id="resultText" className='text-white text-[20px] tracking-[4px] pb-10 uppercase'>{result}</h1>
                                <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-y-2 md:gap-x-10'>
                                    {choices.map((choice) => (
                                        <button
                                        key={choice.name}
                                        className="relative border-2 text-[14px] md:text-[16px] border-pink-500 bg-transparent py-2 md:py-4 px-6 md:px-8 mx-14 md:mx-0 text-white uppercase tracking-[4px] font-[400] overflow-hidden transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-500 before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100 hover:border-pink-500"
                                        onClick={() => handleClick(choice)}
                                    >
                                        <span className='relative z-10 transition-colors duration-300'>{choice.name}</span>
                                        </button>   
                                    ))}
                            </div> 
                        </div>
                    </div>
                </div>
                
            // <div className='flex flex-col items-center justify-between min-h-[60vh] w-full'>
            //     <div className='flex w-full justify-between px-6'>
            //         <div className='flex items-start'>
            //             <img src={me} className='w-[200px] h-[200px] object-center object-cover border-2 border-pink-500 mx-4' alt="Player" />
            //             <div className='flex items-center'>
            //             {player && <img src={player.img} alt={player.name} className='w-[100px] h-[100px] my-12 ml-32' />}
            //             {/* <h1 id="playerText" className='text-white text-[30px] tracking-[4px] ml-2'>{player ? player.name : ''}</h1> */}
            //             </div>
            //         </div>
            //         <div className='flex items-start'>
            //             <div className='flex items-center'>
            //             {/* <h1 id="computerText" className='text-white text-[30px] tracking-[4px] mr-2'>{computer ? computer.name : ''}</h1> */}
            //             {computer && <img src={computer.img} alt={computer.name} className='w-[100px] h-[100px] my-12 mr-32' />}
            //             </div>
            //             <img src={skibidi} className='w-[200px] h-[200px] object-center object-cover border-2 border-pink-500 mx-4' alt="Computer" />
            //         </div>
            //     </div>
            //     <div className='flex flex-col items-center'>
            //         <h1 id="resultText" className='text-white text-[20px] tracking-[4px] pb-10 uppercase'>{result}</h1>
            //         <div className="choices flex gap-4">
            //             {choices.map((choice) => (
            //             <button
            //                 key={choice.name}
            //                 className="relative border-2 text-[16px] border-pink-500 bg-transparent py-2 lg:py-4 px-6 lg:px-8 text-white uppercase tracking-[4px] font-[400] overflow-hidden transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-500 before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100 hover:border-pink-500 hover:px-6"
            //                 onClick={() => handleClick(choice)}
            //             >
            //                 <span className='relative z-10 transition-colors duration-300'>{choice.name}</span>
            //             </button>
            //             ))}
            //         </div>
            //     </div>
            // </div>
        )}
    </div>
  );
};

export default RockPaperSciGame;
