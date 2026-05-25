
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const ScrollSmooth = ({ children }) => {
  useEffect(() => {
const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  wheelMultiplier: 1,

  // Let mobile use native touch scrolling (feels more natural)
  syncTouch: false,
  touchMultiplier: 1,
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