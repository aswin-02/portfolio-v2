import React, { useEffect, useState } from 'react';
import Gradient from '../assets/gradient.png';
import Mask from '../assets/mask.png';
import EMS from '../assets/projects/ems.svg';
import Inventory from '../assets/projects/inventory.svg';
import Vehicle from '../assets/projects/vehicle.svg';
import ImageRec from '../assets/projects/image-recoginition.svg';
import Movie from '../assets/projects/movie.svg';
import '../styles/Project.css';

export default function Project(){

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        };
        
        handleResize(); // Run once on mount to check the window size
        window.addEventListener('resize', handleResize);
        
        return () => {
        window.removeEventListener('resize', handleResize); // Clean up the event listener
        };
    }, []);

    return(
        <section id='projects' className='flex-1 h-full justify-center relative'>
            <img src={Gradient} alt="" className='gradient-4' />
            <img src={Gradient} alt="" className='gradient-5' />
            <div className="project-container mt-20 pb-25">
                <div className='text-center mb-25 w-full'>
                    <h5 className="project-title font-small mb-2 text-3xl text-[#dcff2f]">
                        <span className="relative">Projects<span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#dcff2f] to-transparent"></span>
                        </span>
                    </h5>
                </div>
                <div className="card-row top-row">
                    <div className="card-content">
                        <img src={Mask} alt="" className='' />
                        <div className='card-footer w-full'>
                            <img src={EMS} alt="" />
                            <div className='btn-container px-5 text-right'>
                                <a className='btn btn-dark view-btn'>view</a>
                            </div>
                            <h1 style={{marginTop:'6%',lineHeight:'normal'}}>Employee Management System</h1>    
                        </div>
                    </div>
                    <div className="card-content">
                        <img src={Mask} alt="" className='' />
                        <div className='card-footer w-full'>
                            <img src={Inventory} alt="" />
                            <div className='btn-container px-5 text-right'>
                                <a className='btn btn-dark view-btn'>view</a>
                            </div>
                            <h1 style={{marginTop:'6%',lineHeight:'normal'}}>Inventory Management System</h1>    
                        </div>
                    </div>
                    <div className="card-content">
                        <img src={Mask} alt="" className='' />
                        <div className='card-footer w-full'>
                            <img src={Vehicle} alt="" />
                            <div className='btn-container px-5 text-right'>
                                <a className='btn btn-dark view-btn'>view</a>
                            </div>
                            <h1 style={{marginTop:'6%',lineHeight:'normal'}}>Vehicle Detection</h1>    
                        </div>
                    </div>
                </div>
                <div className={`card-row bottom-row ${isMobile ? 'mt-20' : 'mt-25'}`}>
                    <div className="card-content">
                        <img src={Mask} alt="" className='' />
                        <div className='card-footer w-full'>
                            <img src={Movie} alt="" />
                            <div className='btn-container px-5 text-right'>
                                <a className='btn btn-dark view-btn'>view</a>
                            </div>
                            <h1 style={{marginTop:'6%',lineHeight:'normal'}}>Image Prediction</h1>    
                        </div>
                    </div>
                    <div className="card-content">
                        <img src={Mask} alt="" className='' />
                        <div className='card-footer w-full'>
                            <img src={ImageRec} alt="" />
                            <div className='btn-container px-5 text-right'>
                                <a className='btn btn-dark view-btn'>view</a>
                            </div>
                            <h1 style={{marginTop:'6%',lineHeight:'normal'}}>Movie Fetcher</h1>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}