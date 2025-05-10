import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Settings, HelpCircle } from 'lucide-react';
import Gradient from './assets/gradient.png';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import './styles/App.css';

export default function AppLayout() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  return (
    <main className="bg-[#1a1a1a] relative">
        <img src={Gradient} alt="" className='gradient-2' />
        
        <Header/>
        
        {/* Main Content */}
        <Hero/>
        {/* About Content */}
        <About/>
        {/* Skills Content */}
        <Skills/>
        {/* Project Content */}
        <Project/>
        {/* Contact Content */}
        <Contact/>

      <div>
        <a href="#" className='text-light scroll-to-top'>
          <i className="fa-solid fa-chevron-up"></i>
        </a>
      </div>

      <div className='copyright w-full p-2 bg-[#dcff2f] text-center'>
        <span>Designed and developed by <span className='bg-[#141414] text-[#dcff2f] p-1'>myself</span></span>
      </div>
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </main>
  );
}