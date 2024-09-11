'use client'
import React from 'react';

interface ToCopyProps {
  textToCopy: string[] | string | number | boolean;
  children: React.ReactNode;
}
const ToCopy: React.FC<ToCopyProps> = ({ textToCopy, children }) => {
  const copyToClipboard = () => {
    const textToCopyAsString = Array.isArray(textToCopy) ? textToCopy.join('') : String(textToCopy);
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textToCopyAsString)
        .then(() => alert('¡El enlace se ha copiado al portapapeles!'))
        .catch((error) => console.error('Error al copiar al portapapeles:', error));
    } else {
      alert('La función de copiar al portapapeles no está disponible en este navegador. Por favor, copie el enlace manualmente.');
    }
  };

  return (
    <div onDoubleClick={copyToClipboard} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};

export { ToCopy };

