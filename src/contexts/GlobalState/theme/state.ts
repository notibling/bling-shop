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
  // Inicializa darkMode con el valor guardado en localStorage, si existe.
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('dark-mode') === 'true';
    }
    return false; // Valor predeterminado
  });

  // Efecto para aplicar la clase "dark" al documento y actualizar localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Guarda el estado de darkMode en localStorage
      localStorage.setItem('dark-mode', darkMode.toString());
    }
  }, [darkMode]); // Solo se ejecuta cuando darkMode cambia

  // Función para alternar el estado de darkMode
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return { darkMode, toggleDarkMode };
}

export { useTheme, type ThemeState, themeDefaultValue };
