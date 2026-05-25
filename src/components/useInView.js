// src/components/useInView.js
import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
  const { 
    threshold = 0.3, 
    rootMargin = "0px", 
    triggerOnce = true 
  } = options;

  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { 
        threshold, 
        rootMargin 
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}