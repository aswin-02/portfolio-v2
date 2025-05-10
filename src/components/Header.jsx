import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Header.css';

const navItems = [
  { label: 'Home' },
  { label: 'About' },
  { label: 'Skills' },
  { label: 'Projects' },
  { label: 'Contact' },
];

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  // Resize listener for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll spy logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 60% visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const matchedItem = navItems.find(item => item.label.toLowerCase() === sectionId);
          if (matchedItem) {
            setActiveItem(matchedItem.label);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach(item => {
      const section = document.getElementById(item.label.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (label) => {
    setActiveItem(label);
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <div className="relative z-2">
      {isMobile && (
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[#dcff2f] shadow-md"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      <nav
        className={`
          fixed left-0 top-0 h-full 
          ${isMobile ? 'transform transition-transform duration-300 ease-in-out z-40' : ''}
          ${isMobile && !sidebarOpen ? '-translate-x-full' : 'translate-x-0'}
          w-13 bg-[#141414] shadow-lg flex flex-col
        `}
      >
        <div className={`flex flex-col justify-start ${isMobile ? 'pt-15' : 'pt-7'} items-center h-full`}>
          <div className="flex flex-col gap-12 py-4">
            {navItems.map((item, index) => (
              <div key={index} className="vertical-nav-item">
                <a
                  href={`#${item.label.toLowerCase()}`}
                  className={`flex items-center justify-center p-2 transition-colors duration-200
                    ${activeItem === item.label ? 'text-[#141414] bg-[#dcff2f]' : 'text-[#dcff2f]'}`}
                  onClick={() => handleNavClick(item.label)}
                >
                  <span className="vertical-text">{item.label}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col pb-5 justify-end items-center h-full'>
          <a href='#'>
            <i className="text-[#dcff2f] text-3xl fa-brands fa-linkedin"></i>
          </a>
        </div>
      </nav>
    </div>
  );
}
