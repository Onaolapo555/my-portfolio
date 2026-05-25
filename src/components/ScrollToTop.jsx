import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration
    window.history.scrollRestoration = 'manual';

    // Multiple aggressive scrolls to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);

    // Small delays for reliability
    const t1 = setTimeout(() => window.scrollTo(0, 0), 10);
    const t2 = setTimeout(() => window.scrollTo(0, 0), 50);
    const t3 = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return null;
}