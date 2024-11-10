
import React from 'react';
import classNames from 'classnames';

interface TextProps {
  text: string;
  size?: 'small' | 'medium' | 'large' | 'x-large'; // Tamaños de texto
  color?: 'normal' | 'primary' | 'secondary' | 'success' | 'error'; // Colores disponibles
  align?: 'left' | 'center' | 'right' | 'justify'; // Alineación de texto
  weight?: 'normal' | 'bold' | 'bolder' | 'lighter'; // Peso de la fuente
  decoration?: 'underline' | 'line-through' | 'none'; // Decoración de texto
  transform?: 'uppercase' | 'lowercase' | 'capitalize'; // Transformación de texto
  lineHeight?: 'normal' | 'tight' | 'loose'; // Interlineado
  letterSpacing?: 'normal' | 'wide' | 'wider'; // Interletrado
  className?: string; // Clases adicionales opcionales
}

const Text: React.FC<TextProps> = ({
  text,
  size = 'medium',
  color = 'normal', // Color por defecto
  align = 'left',
  weight = 'normal',
  decoration = 'none',
  transform = 'none',
  lineHeight = 'normal', // Interlineado por defecto
  letterSpacing = 'normal', // Interletrado por defecto
  className,
}) => {
  // Mapa para los colores
  const colorClasses = {
    normal: ['text-bling-light-text', 'dark:text-bling-dark-text'],
    primary: ['text-primary'],
    secondary: ['text-secondary'],
    success: ['text-success'],
    error: ['text-error'],
  };
  const lineHeightClasses = {
    normal: 'leading-normal', // Interlineado normal
    tight: 'leading-tight', // Interlineado ajustado
    loose: 'leading-loose', // Interlineado suelto
    snug: 'leading-snug', // Interlineado ajustado (más compacto)
    relaxed: 'leading-relaxed', // Interlineado relajado
    extraTight: 'leading-[1]', // Interlineado extra ajustado
    extraLoose: 'leading-[1.75]', // Interlineado extra suelto
  };

  return (
    <p
      className={classNames(
        'text-md',
        'text-bling-light-text',
        'dark:text-bling-dark-text',
        'leading-none',

        {
          'text-sm': size === 'small',
          'text-md': size === 'medium',
          'text-lg': size === 'large',
          'text-xl': size === 'x-large',
          'text-left': align === 'left',
          'text-center': align === 'center',
          'text-right': align === 'right',
          'text-justify': align === 'justify',
          'font-normal': weight === 'normal',
          'font-bold': weight === 'bold',
          'font-bolder': weight === 'bolder',
          'font-light': weight === 'lighter',
          underline: decoration === 'underline',
          'line-through': decoration === 'line-through',
          uppercase: transform === 'uppercase',
          lowercase: transform === 'lowercase',
          capitalize: transform === 'capitalize',
          // Interlineado
          'leading-tight': lineHeight === 'tight',
          'leading-normal': lineHeight === 'normal',
          'leading-loose': lineHeight === 'loose',
          // Interletrado
          'tracking-tight': letterSpacing === 'tight',
          'tracking-normal': letterSpacing === 'normal',
          'tracking-wide': letterSpacing === 'wide',
          'tracking-wider': letterSpacing === 'wider',
        },
        ...(colorClasses[color] || colorClasses['normal']), // Agregar las clases de color usando el mapa
        lineHeightClasses[lineHeight] || lineHeightClasses['normal'],
        className // Clases adicionales si se pasan
      )}
    >
      {text}
    </p>
  );
};

export { Text };
