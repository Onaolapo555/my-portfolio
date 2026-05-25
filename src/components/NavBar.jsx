// import { HiOutlineDocumentText } from 'react-icons/hi';
import {   
  FaLinkedin,
  FaGithub,
  FaCode,
  FaUser,
} from 'react-icons/fa6'; 
import { Home } from 'lucide-react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './liquid-glass.css';

import { useNavigate, useLocation } from 'react-router-dom';





function NavBar() {


   const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = () => {
    if (location.pathname === '/') {
      // Already on home → smooth scroll
      scrollToAbout();
    } else {
      // Navigate to home and then scroll to About
      navigate('/', { state: { scrollTo: 'about' } });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const navbarHeight = 90; // Adjust if your navbar is taller
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };





  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  // Keyboard avoidance (your original logic)
  useEffect(() => {
    const handleResize = () => {
      const keyboardThreshold = window.screen.height * 0.7;
      setIsKeyboardOpen(window.visualViewport?.height < keyboardThreshold);
    };

    window.visualViewport?.addEventListener('resize', handleResize);
    return () => window.visualViewport?.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* SVG Filter - Exactly as in the original */}
      <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />

          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>

          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>

          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />

          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Main Navbar */}
      <div
        className={`liquidGlass-wrapper dock  rounded-3xl  h-16  lg:gap-7 items-center justify-center flex-wrap fixed top-7 left-1/2 dock ${isKeyboardOpen ? 'keyboard-hidden' : ''}`}
        style={{
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9998,
        }}
      >
        <div className=" rounded-3xl" />
        <div className="liquidGlass-tint rounded-3xl"/>
        <div className="liquidGlass-shine rounded-3xl" />

        <div className="liquidGlass-content">
          <div className="dock gap-5 md:gap-7 px-2 min-w-3xs max-w-3xl">
            <a href="/"
        className="text-gray-200 p-2 link-bg hover:text-white w-9 h-9 hover:scale-120 transition-all duration-300  rounded-md ">
          <Home className="w-full h-full object-cover " />
        </a>

        <Link to="/projects" 
        className="text-gray-200 link-bg p-2 hover:text-white w-9 h-9 hover:scale-120 transition-all duration-300 bg-gray-900  rounded-md ">
          <FaCode className="w-full h-full object-cover " />
        </Link>

        <button
        onClick={handleAboutClick}
        className="text-gray-200 link-bg p-2 hover:text-white w-9 h-9 hover:scale-120 transition-all duration-300 bg-gray-900  rounded-md hover:cursor-pointer">
           <FaUser className="w-full h-full object-cover" />
        </button>

         <a href="https://github.com/Onaolapo555/Onaolapo555" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-200 link-bg p-2 hover:text-white w-9 h-9 hover:scale-120 transition-all duration-300 bg-gray-900  rounded-md ">
          <FaGithub className="w-full h-full object-cover " />
        </a>

         <a href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-200 p-2 link-bg hover:text-white w-9 h-9 hover:scale-120 transition-all duration-300 bg-[#0c4998]  rounded-md ">
          <FaLinkedin className="w-full h-full object-cover" />
        </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;




