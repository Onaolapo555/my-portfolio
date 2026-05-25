
import {   
  FaLinkedin,
  FaGithub,
  FaCode,
  FaUser,
} from 'react-icons/fa6'; 
import { Home } from 'lucide-react'
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import './GlassNavBar.css';
import { useNavigate, useLocation } from 'react-router-dom';



export default function GlassNavbar() {

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



const navbarRef = useRef(null);
  const feImageRef = useRef(null);
  const redRef = useRef(null);
  const greenRef = useRef(null);
  const blueRef = useRef(null);

  useEffect(() => {
    if (!navbarRef.current) return;

    // 1. Get the dynamic width and height directly from the DOM element handled by Tailwind
    const { width, height } = navbarRef.current.getBoundingClientRect();
    
    // Glass setup configurations
    const radius = 16;
    const borderRatio = 0.07;
    const lightness = '50%';
    const alpha = 0.93;
    const blurRadius = '8px';

    const baseScale = -180;
    const redScale = baseScale + 0;
    const greenScale = baseScale + 10;
    const blueScale = baseScale + 20;

    const border = Math.min(width, height) * (borderRatio * 0.5);

    // 2. Generate the map matching the exact rendered pixel constraints
    const svgMapContent = `
      <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="red" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${width}" height="${height}" fill="black"></rect>
        <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" fill="url(#red)" />
        <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" fill="url(#blue)" style="mix-blend-mode: difference" />
        <rect x="${border}" y="${border}" width="${width - border * 2}" height="${height - border * 2}" rx="${radius}" fill="hsl(0 0% ${lightness} / ${alpha})" style="filter:blur(${blurRadius})" />
      </svg>
    `;

    const encoded = encodeURIComponent(svgMapContent.replace(/\s+/g, ' '));
    const dataUri = `data:image/svg+xml,${encoded}`;

    if (feImageRef.current) feImageRef.current.setAttribute('href', dataUri);
    if (redRef.current) redRef.current.setAttribute('scale', redScale.toString());
    if (greenRef.current) greenRef.current.setAttribute('scale', greenScale.toString());
    if (blueRef.current) blueRef.current.setAttribute('scale', blueScale.toString());
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-9998 flex justify-center items-center pointer-events-none">
    <div 
        ref={navbarRef} 
        className="effect-layer h-16 pointer-events-auto min-w-3xs  max-w-sm"
      >
        <div className="nav-wrapper">
          <nav className=''>
            <div className="flex gap-5 md:gap-7 p-2">
            <a href="/"
        className="text-gray-200 p-2 hover:text-white w-9 h-9 hover:scale-120 transition-all duration-300 backdrop-blur-3xl rounded-md icon-pod-portfolio">
          <Home className="w-full h-full object-cover " />
        </a>

        <Link to="/projects" 
        className="text-gray-200 p-2 backdrop-blur-3xl hover:text-white w-9 h-9 hover:scale-120 transition-all duration-300  rounded-md icon-pod-portfolio">
          <FaCode className="w-full h-full object-cover " />
        </Link>

        <button
        onClick={handleAboutClick}
        className="text-gray-200 p-2 backdrop-blur-3xl hover:text-white w-9 h-9 hover:scale-120 transition-all duration-300  rounded-md hover:cursor-pointer icon-pod-portfolio">
           <FaUser className="w-full h-full object-cover" />
        </button>

         <a href="https://github.com/Onaolapo555/Onaolapo555" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-200 backdrop-blur-3xl p-2 hover:text-white w-9 h-9 hover:scale-120 transition-all duration-300  rounded-md icon-pod-portfolio">
          <FaGithub className="w-full h-full object-cover " />
        </a>

         <a href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-200 backdrop-blur-3xl p-2 hover:text-white w-9 h-9 hover:scale-120 transition-all duration-300  rounded-md icon-pod-portfolio">
          <FaLinkedin className="w-full h-full object-cover" />
        </a>
          </div>
          </nav>
        </div>

        <svg className="filter-matrix" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glass-distortion-filter" colorInterpolationFilters="sRGB">
              <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" result="map" />
              <feDisplacementMap ref={redRef} in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="G" result="dispRed" />
              <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />
              <feDisplacementMap ref={greenRef} in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="G" result="dispGreen" />
              <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />
              <feDisplacementMap ref={blueRef} in="SourceGraphic" in2="map" xChannelSelector="R" yChannelSelector="G" result="dispBlue" />
              <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />
              <feBlend in="red" in2="green" mode="screen" result="rg" />
              <feBlend in="rg" in2="blue" mode="screen" result="output" />
              <feGaussianBlur in="output" stdDeviation="0.7" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}