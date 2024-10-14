'use client';
import dynamic from 'next/dynamic';
import React, { SVGProps } from 'react';
import { Frozen } from '../molecules';
import { MemoryCache } from '@/common/MemoryCache';

const memoryCache = new MemoryCache();

interface IconProps {
  name: string | React.ComponentType<any>;
  color?: string;
  size?: number;
  className?: string;
  frozen?: boolean;
 
}

const IconBase: React.FC<IconProps> = ({ name, className = '', color = 'currentColor', size }) => {
  let IconComponent: React.ReactNode = null;
  const combinedClassName = `pb-0 ${className}`;

  if (typeof name === 'string') {
    let BlingIcon: any;

    // Verificar si el ícono está en la caché
    if (memoryCache.get(name)) {
      BlingIcon = memoryCache.get(name);
    } else {
      // Carga dinámica del ícono
      BlingIcon = dynamic(
        async() => {
          try {
            console.log('ICON MESSAGE:: ICON FOUND::', name);
            const _module = await import(`../../icons/tsx/${name}.tsx`);
            memoryCache.set(name, _module.default); // Almacenar ícono en caché
            return _module.default as React.FC<SVGProps<SVGSVGElement>>;
          } catch (error) {
            console.error('ICON ERROR:: ICON NOT FOUND::', name);
            const defaultModule = await import('../../icons/tsx/Accessibility');
            return defaultModule.default as React.FC<SVGProps<SVGSVGElement>>;
          }
        },
        { ssr: false }
      ) as any;
    }
    
    // Si el ícono existe, lo renderizamos
    if (BlingIcon) {
      IconComponent = (
        <BlingIcon className={combinedClassName} color={color} fill={color} width={size} height={size} />
      );
    } else {
      // Si no se encuentra el ícono, removerlo de la caché
      memoryCache.delete(name);
      console.error(`Icon "${name}" not found.`);
      return null;
    }
  } else if (typeof name === 'function') {
    const ReactIcon = name as React.ComponentType<any>;
    IconComponent = (
      <ReactIcon color={color} fill={color} width={size} height={size} className={combinedClassName} />
    );
  } else {
    console.error(`Icon "${name}" is not valid.`);
    return null;
  }
  return IconComponent as JSX.Element;
};

const Icon: React.FC<IconProps> = ({ frozen = true, ...props }) => {
  const { size, ...restProps } = props;

  // Si el ícono está congelado, usar el componente `Frozen`
  if (frozen) {
    return (
      <Frozen {...restProps}>
        <IconBase frozen={frozen} {...restProps} size={size} />
      </Frozen>
    );
  }

  return <IconBase {...restProps} size={size} />;
};

export { Icon };
