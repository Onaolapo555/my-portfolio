
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const ScrollSmooth = ({ children }) => {
  useEffect(() => {
   const lenis = new Lenis({
  duration: 1.0,
  lerp: 0.1,
  smoothWheel: true,
  smoothTouch: false,
  syncTouch: false,
  touchMultiplier: 1.6,
});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default ScrollSmooth;