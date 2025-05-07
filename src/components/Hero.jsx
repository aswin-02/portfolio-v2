import React, { useEffect, useState } from 'react';
import Rectangle from '../assets/rectangle.svg';
import Gradient from '../assets/gradient.png';
import Profile from '../assets/profile.png';
import '../styles/Hero.css';

export default function Hero() {
    const words = ["Davinci", "a Web Developer"];
    const period = 2000;

    const [isMobile, setIsMobile] = useState(false);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(200 - Math.random() * 100);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullTxt = words[i];

            setText(prev =>
                isDeleting ? fullTxt.substring(0, prev.length - 1) : fullTxt.substring(0, prev.length + 1)
            );

            if (!isDeleting && text === fullTxt) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(prev => prev + 1);
                setDelta(500);
            } else {
                setDelta(isDeleting ? 100 : 200 - Math.random() * 10);
            }
        };

        const timer = setTimeout(handleTyping, delta);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, delta]);

    return (
        <main className="flex-1 p-6 overflow-auto" id='home'>
            <div className="hero-container mx-auto px-4 sm:px-6 lg:px-15 w-full max-w-screen-xl relative">
                {!isMobile && (
                    <img src={Rectangle} alt="" className='rect-1' />
                )}
                <img src={Rectangle} alt="" className='rect-2' />
                <img src={Gradient} alt="" className='gradient-1' />
                <img src={Profile} alt="" className='profile-img' />

                <div className='hero-text-container'>
                    <div className="hero-text">
                        <h1>I'm</h1>
                        <a href="#" className="typewrite">
                            <span className="wrap">{text}</span>
                        </a>
                    </div>
                    {/* <div className="w-1/3 flex items-center justify-center">
                        <p>image</p>
                    </div> */}
                </div>

                <div className='flex gap-7 mt-10'>
                    <a href="#" className='button-secondary'>
                        <span>Connect</span>
                    </a>
                    <a href="#" className='btn button-primary'>Download CV</a>
                </div>
                    <span className='hero-light-text'>FULL STACK</span>
            </div>
        </main>
    );
}
