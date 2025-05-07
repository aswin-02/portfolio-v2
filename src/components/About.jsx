import React, { useEffect, useState } from 'react';
import Rectangle from '../assets/rectangle.svg';
import Gradient from '../assets/gradient.png';
import Block from '../assets/block.svg';
import '../styles/About.css';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  // Handle mouse movement for the tilt effect
  const handleMouseMove = (e) => {
    // Skip effect on mobile
    if (isMobile) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
 
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate rotation (limited to a small range for subtle effect)
    const rotateX = (y / (rect.height / 2)) * -5; // Invert Y axis
    const rotateY = (x / (rect.width / 2)) * 5;
    
    // Store actual mouse position for cursor gradient
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
    setMousePosition({ x: 0, y: 0 });
  };
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <section id='about' className='flex-1 h-full p-6 overflow-auto relative'>
      <img src={Block} alt="" className='block-1' />
      <img src={Block} alt="" className='block-2' />
      <img src={Gradient} alt="" className='gradient-3' />
      <img src={Rectangle} alt="" className='rect-3' />
      <img src={Rectangle} alt="" className='rect-4' />
      <img src={Rectangle} alt="" className='rect-5' />
      <img src={Rectangle} alt="" className='rect-6' />


      <div className="mx-auto mt-40 mb-70 about-container px-4 sm:px-6 lg:px-15 w-full max-w-screen-xl relative">
        <div 
          className="w-auto p-15 about-card overflow-hidden"
          style={{
            transform: isHovering && !isMobile
              ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)` 
              : 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
            background: 'rgba(22, 22, 26, 0.7)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            transition: 'all 0.3s ease',
            position: 'relative',
            borderRadius: '0.75rem',
            padding: '2rem'
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Subtle gradient overlay */}
          <div 
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom right, rgba(220,255,47,0.12), transparent)',
              borderRadius: '0.75rem'
            }}
          ></div>
          
          {/* Cursor following gradient */}
          {isHovering && !isMobile && (
            <div 
              className="absolute pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, #dcff2f 0%, rgba(220, 255, 47, 0.4) 30%, transparent 70%)`,
                width: '180px',
                height: '180px',
                left: `${mousePosition.x - 90}px`,
                top: `${mousePosition.y - 90}px`,
                transition: 'opacity 0.15s ease',
                mixBlendMode: 'overlay',
                opacity: '0.2',
                borderRadius: '50%'
              }}
            />
          )}
          
          {/* Card content */}
          <div className="relative z-10">
            <h5 className="mb-2 text-3xl text-[#dcff2f]">
              <span className="relative">
                About Me
                <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#dcff2f] to-transparent"></span>
              </span>
            </h5>
            <p className="mb-5 mt-10 text-justify text-white font-medium sm:text-lg">
              Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today. Download the app today. Download the app today. Forward with Flowbite on iOS & Android. Download the app today. Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}