import { useEffect, useState } from "react";

// Make sure 'export' is right here!
export function useDarkMode() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark" || !("theme" in localStorage)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return [isDark, setIsDark];
}