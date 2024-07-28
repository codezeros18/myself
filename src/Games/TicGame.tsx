import React, { useState, useEffect } from 'react';

const winCon: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const TicGame: React.FC = () => {
    const [options, setOptions] = useState<string[]>(Array(9).fill(""));
    const [curPlayer, setCurPlayer] = useState<string>("X");
    const [status, setStatus] = useState<string>(`${curPlayer}'s Turn`);
    const [running, setRunning] = useState<boolean>(true);
    const [countdown, setCountdown] = useState<number>(3);
    const [gameStarted, setGameStarted] = useState<boolean>(false);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if (running && curPlayer === "X") {
            if (countdown > 0) {
                timer = setTimeout(() => {
                    setCountdown(countdown - 1);
                }, 1000);
            } else {
                setStatus("ur suck");
                setRunning(false);
            }
        } else if (curPlayer === "O" && running) {
            const computerMoveTimeout = setTimeout(() => {
                computerMove();
            }, 500);
            return () => clearTimeout(computerMoveTimeout);
        }

        return () => clearTimeout(timer);
    }, [curPlayer, running, countdown]);

    useEffect(() => {
        if (countdown === 0 && curPlayer === "X" && running) {
            setStatus("O Wins by Timeout! ur suck");
            setRunning(false);
        }
    }, [countdown, curPlayer, running]);

    const handleCellClick = (index: number) => {
        if (options[index] !== "" || !running || curPlayer !== "X") return;

        const newOptions = [...options];
        newOptions[index] = curPlayer;
        setOptions(newOptions);
        checkWinner(newOptions);
    };

    const computerMove = () => {
        const availableCells = options.map((val, index) => (val === "" ? index : null)).filter(val => val !== null);
        const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];

        if (randomCell !== null) {
            const newOptions = [...options];
            newOptions[randomCell] = "O";
            setOptions(newOptions);
            checkWinner(newOptions);
        }
    };

    const changePlayer = () => {
        setCurPlayer((prev) => (prev === "X" ? "O" : "X"));
        setStatus(`${curPlayer === "X" ? "O" : "X"}'s Turn`);
        if (curPlayer === "O") {
            setCountdown(3); // Reset the countdown for the next turn
        }
    };

    const checkWinner = (newOptions: string[]) => {
        let roundWon = false;

        for (let i = 0; i < winCon.length; i++) {
            const [a, b, c] = winCon[i];
            if (newOptions[a] !== "" && newOptions[a] === newOptions[b] && newOptions[a] === newOptions[c]) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            setStatus(`${curPlayer} Wins!`);
            setRunning(false);
        } else if (!newOptions.includes("")) {
            setStatus(`Draw!`);
            setRunning(false);
        } else {
            changePlayer();
        }
    };

    const restartGame = () => {
        setOptions(Array(9).fill(""));
        setCurPlayer("X");
        setStatus("X's Turn");
        setRunning(true);
        setCountdown(3);
    };

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const startGame = () => {
        setGameStarted(true);
        restartGame(); // Initialize the game board and status when the game starts
    };

    return (
        <div className='text-center'>
            <div>
                {!gameStarted && (
                    <>
                        <h1 className='text-[30px] tracking-[2px]'>Victory lies in your next move, ready to conquer the grid?</h1>
                        <button
                            id='startBtn'
                            className="relative border-2 text-[16px] border-pink-500 bg-transparent py-2 lg:py-4 my-10 px-6 lg:px-8 text-white uppercase tracking-[4px] font-[400] overflow-hidden transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-500 before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100 hover:border-pink-500 hover:px-6"
                            onClick={startGame}
                        >
                            <span className='relative z-10 transition-colors duration-300'>START</span>
                        </button>
                        <h2 className='text-[20px] tracking-[2px]'>You have time to think for 3 seconds, you're an X</h2>
                    </>
                )}
                {gameStarted && (
                    <>
                        <div id="statusText" className='py-10 text-[20px]'>{status}</div>
                        <div className='pb-10 text-[20px]'>{curPlayer === "X" ? formatTime(countdown) : "-"}</div>
                        <div className='grid grid-template-rows-3 gap-[1px] grid-cols-3 w-[225px] md:w-[300px]'>
                            {options.map((cell, index) => (
                                <div
                                    key={index}
                                    className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] flex items-center justify-center border-solid border-2 border-pink-500 text-[50px] shadow-lg leading-[90px] cursor-pointer"
                                    onClick={() => handleCellClick(index)}
                                >
                                    {cell}
                                </div>
                            ))}
                        </div>
                        <button
                            id="restartBtn"
                            className="relative border-2 text-[16px] border-pink-500 bg-transparent py-2 lg:py-4 my-10 px-6 lg:px-8 text-white uppercase tracking-[4px] font-[400] overflow-hidden transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-500 before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100 hover:border-pink-500 hover:px-6"
                            onClick={() => {
                                setGameStarted(false); // Go back to the start screen
                            }}
                        >
                            <span className='relative z-10 transition-colors duration-300'>RESTART GAME</span>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TicGame;
