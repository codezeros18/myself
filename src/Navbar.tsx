import { useState, useEffect } from 'react';
import navImage1 from './assets/navs.jpg'; // Different image imports
import navImage2 from './assets/projects.jpg';
import navImage3 from './assets/experience.jpg';
import navImage4 from './assets/social.jpg';
import { FaInstagram, FaTwitter, FaGithub, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNavbarMenu = () => {
        setIsNavbarMenuOpen(!isNavbarMenuOpen);
    };

    const items = [
        { text: 'MINI GAMES', image: navImage1, href: '/minigames' },
        { text: 'PROJECTS', image: navImage2, href: '#' },
        { text: 'EXPERIENCE', image: navImage3, href: '#' },
        { text: 'SOCIAL LIFE', image: navImage4 , href: '#' },
    ];

    const icons = [
        { icon : <FaInstagram />, href: 'https://www.instagram.com/lintangbalakosaa/' },
        { icon : <FaTwitter />, href: 'https://x.com/codeee181' },
        { icon : <FaGithub />, href: 'https://github.com/codezeros18' },
        { icon : <FaTiktok />, href: 'https://www.tiktok.com/@momunohana?lang=en' },
    ]

    return (
        <header className={`font-montserrat sticky top-0 z-50 transition-all duration-300 ${isNavbarMenuOpen ? 'bg-blackie' : (scrolled ? 'bg-blackie' : 'bg-transparent')}` }>
            <nav className='mx-0 lg:mx-2 flex max-w-8xl items-center justify-between p-6'>
                <div className='flex items-center'>
                    <Link to={"/"} className='-m-1.5 p-1.5'>
                        <span className='sr-only'>Company</span>
                        <h2 className='text-[18px] font-[700] tracking-[8px]'>ZERO</h2>
                    </Link>
                </div>
                <div className='flex lg:gap-x-4 justify-end flex-1'>
                    <div className='flex'>
                        <button
                            type='button'
                            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                            onClick={toggleNavbarMenu}
                            aria-expanded={isNavbarMenuOpen}
                        >
                            <span className='sr-only'>Toggle Main Menu</span>
                            {isNavbarMenuOpen ? (
                                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {isNavbarMenuOpen && (
                <div className='font-open sticky top-0 z-50' role='dialog' aria-modal='true'>
                    <div className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-herobackg  bg-blackie bg-opacity-90 backdrop-blur-sm'>
                        <div className='mx-0 lg:mx-2 flex max-w-8xl items-center justify-between p-6'>
                            <div className='flex items-center'>
                                <Link to={"/"} className='-m-1.5 p-1.5'>
                                    <span className='sr-only'>Company</span>
                                    <h2 className='text-[18px] font-[700] tracking-[8px]'>ZERO</h2>
                                </Link>
                            </div>
                            <div className='flex lg:gap-x-4 justify-end flex-1'>
                                <div className='flex'>
                                    <button
                                        type='button'
                                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                                        onClick={toggleNavbarMenu}
                                        aria-expanded={isNavbarMenuOpen}
                                    >
                                        <span className='sr-only'>Toggle Main Menu</span>
                                        {isNavbarMenuOpen ? (
                                            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        ) : (
                                            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto max-w-1xl lg:px-0 lg:mx-30 md:mx-20 md:my-0">
                            <div className="relative z-10 lg:z-auto px-2 md:px-6 pt-1">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-2 md:gap-x-2 md:gap-y-2">
                                    {items.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.href}
                                            className={`relative cursor-pointer h-[110px] md:h-[200px] lg:h-[260px] overflow-hidden bg-cover bg-center slide-in item-${index + 1}`}
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        >
                                            <div className="absolute inset-0 bg-black bg-opacity-40 md:bg-opacity-90 transition duration-500 hover:bg-opacity-50"></div>
                                            <div className='relative z-10 flex flex-col text-center my-8 md:my-24'>
                                                <h1 className='text-[14px] lg:text-[28px] leading-[50px] font-[700] md:font-[400] tracking-[10px] lg:tracking-[8px]'>
                                                    {item.text}
                                                </h1>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className='text-center my-6 md:my-10'>
                                    <div className='flex justify-center gap-6'>
                                    {icons.map((icon, index) => (
                                        <Link
                                            to={icon.href}
                                            key={index}
                                            className={`cursor-pointer text-white hover:text-gray-500 transition duration-500 text-[18px] lg:text-[20px] slide-in item-${index + 1}`}
                                        >
                                            {icon.icon}
                                        </Link>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
