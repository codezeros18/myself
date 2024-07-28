    import backg from './assets/backg3.png';
    import tictac from './assets/tictac.jpg';
    // import rockpapersci from './assets/rockpaper1.jpg';
    // import snake from './assets/snake.jpg';
    // import pong from './assets/pong3.jpg';
    // import { useEffect } from 'react';
    import { Link } from 'react-router-dom';

    const MiniLand = () => {
        // useEffect(() => {
        //     const handleScroll = () => {
        //         const page1 = document.getElementById('page1');
        //         const page2 = document.getElementById('page2');
        //         if (page1 && page2) {
        //             const page1Height = page1.offsetHeight;
        //             const scrollPosition = window.scrollY + window.innerHeight;
    
        //             // Scroll to page2 when the bottom of the viewport reaches halfway down page1
        //             if (scrollPosition >= page1Height / 2) {
        //                 page2.scrollIntoView({ behavior: 'smooth' });
        //             }
        //         }
        //     };
    
        //     window.addEventListener('scroll', handleScroll);
        //     return () => window.removeEventListener('scroll', handleScroll);
        // }, []);
        const scrollToSection = () => {
            const section = document.getElementById('page2');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          };

        const games = [
            {link: tictac, href: '/Tic'},
        ]
        return (
            <div>
                {/* Page 1 */}
                <div id='page1' className="relative isolate min-h-[100vh] flex items-center justify-center">
                    <div className='lg:hidden flex flex-1'>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[400px] h-[400px] rounded-full absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[200px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center -mt-20">
                            <div className="w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] rounded-full absolute z-0">
                                <img src={backg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 p-4 -mt-14 md:-mt-36 lg:py-8 mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center">
                            <div className="flex flex-col items-center md:items-start">
                                <p className="font-open py-2 lg:py-10  text-[10px] lg:text-[15px] leading-[20px] tracking-[2px] font-[300] text-white text-opacity-30 text-center">
                                    Aren't You Curious About What Lies Ahead?
                                </p>
                                <h1 className="animated-text font-merriweather text-[40px] lg:text-[60px] leading-[50px] lg:leading-[62px] tracking-[8px] font-[700] pb-4 lg:pb-0">
                                    MINI GAMES
                                </h1>
                                <p className="font-playfair text-[14px] lg:text-[18px] leading-[24px] tracking-[9px] font-[400] italic">
                                    BY UMN STUDENTS
                                </p>
                                <div className="mt-12">
                                    <button onClick={scrollToSection} className="relative border-2 text-[16px] border-white bg-transparent py-2 lg:py-4 px-8 lg:px-10 text-white uppercase tracking-[4px] font-[400] overflow-hidden transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-pink-500 before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100 hover:border-pink-500 hover:px-6">
                                        <span className="relative z-10 transition-colors duration-300">EXPLORE</span>
                                    </button>
                                </div>
                            </div>
                            <div className="hidden relative lg:flex items-center justify-center min-h-screen md:min-h-[500px]">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-[500px] h-[500px] rounded-full absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[300px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                                </div>
                                <img src={backg} alt="" className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] object-cover opacity-90 z-10" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page 2 */}
                <div id='page2' className='relative isolate bg-blackie'>
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[400px] h-[400px] rounded-full absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[200px] bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500"></div>
                    </div> */}
                    <div className="mx-auto max-w-1xl pb-10 lg:pb-14 sm:pb-10 lg:py-2 lg:px-0 lg:mx-30 md:mx-20 md:py-60 sm:mx-0">
                        <div className="relative z-10 p-4 -mt-14 md:-mt-20 lg:py-8 mx-auto">
                            <div className='my-20'>
                                <h1 className='text-[40px] lg:text-[48px] leading[72px] font-[700] text-white tracking-wide text-center lg:text-left'>Games</h1>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-x-0 lg:gap-x-6 gap-y-8 lg:gap-y-14 lg:-pt-0">
                                {games.map((game,index) => (
                                    <Link key={index} 
                                    to={game.href}
                                    className={'relative cursor-pointer h-[180px] lg:h-[310px] overflow-hidden rounded-[10px] hover:ring-2 hover:ring-blackie'}
                                    >
                                        <img src={tictac} className='h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105' alt="halo" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default MiniLand