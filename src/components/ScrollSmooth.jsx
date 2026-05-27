import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const ScrollSmooth = ({ children }) => {
  useEffect(() => {
    // Detect mobile
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
      || window.innerWidth < 768;

    // Only enable Lenis on desktop
    if (isMobile) {
      return; // Native scroll on mobile
    }

    const lenis = new Lenis({
      duration: 1.1,
      lerp: 0.07,
      smoothWheel: true,
      smoothTouch: false,     // Important
      syncTouch: false,
      touchMultiplier: 1.4,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
};

export default ScrollSmooth;
