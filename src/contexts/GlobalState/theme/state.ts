import { useEffect, useState } from 'react';

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const themeDefaultValue = {
  darkMode: false,
  toggleDarkMode: () => {}
};

function useTheme(): ThemeState {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('dark-mode');
      setDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('dark-mode', newMode.toString());
    }
  };

  return { darkMode, toggleDarkMode };
}

export { useTheme, type ThemeState, themeDefaultValue };
