'use client';
import dynamic from 'next/dynamic';
import React, { SVGProps } from 'react';
import { Frozen } from '../molecules';
import { MemoryCache } from '@/common/MemoryCache';

const memoryCache = new MemoryCache();

interface IconProps {
  name: string | React.ComponentType<any>;
  color?: string | string[] | Record<string, any> | any;
  size?: number;
  className?: string | string[] | Record<string, any> | any;
  frozen?: boolean;
}

const IconBase: React.FC<IconProps> = ({ name, className = '', color = 'currentColor', size }) => {
  let IconComponent: React.ReactNode = null;

  const combinedClassName = `pb-0 ${className}`;

  if (typeof name === 'string') {
    let BlingIcon: any;

    if (memoryCache.get(name)) BlingIcon = memoryCache.get(name);
    else
      BlingIcon = dynamic(
        async () => {
          try {
            console.log('ICON MESSAGE:: ICON FOUND::', name);
            const _module = await import(`../../icons/tsx/${name}.tsx`);
            memoryCache.set(name, _module.default);

            return _module.default as (props: SVGProps<SVGSVGElement>) => JSX.Element;
          } catch (e) {
            console.log('ICON ERROR:: ICON NOT FOUND::', name);
            const defaultModule = await import('../../icons/tsx/Accessibility');
            return defaultModule.default;
          }
        },
        { ssr: false }
      ) as any;

    if (BlingIcon) {
      IconComponent = <BlingIcon className={combinedClassName} color={color} fill={color} width={size} height={size} />;
    } else {
      console.error(`Solar icon "${name}" not found.`);
    }
  } else if (typeof name === 'function') {
    const ReactIcon = name as React.ComponentType<any>;
    IconComponent = <ReactIcon color={color} fill={color} width={size} height={size} className={combinedClassName} />;
  } else {
    console.error(`Icon "${name}" not found or invalid.`);
  }

  return IconComponent as JSX.Element | null;
};

const Icon = ({ frozen = true, ...props }: IconProps) => {
  const { size, ...restProps } = props;

  if (frozen) {
    return (
      <Frozen {...restProps}>
        <IconBase frozen={frozen} {...restProps} size={size} />
      </Frozen>
    );
  }

  return <IconBase frozen={frozen} {...restProps} size={size} />;
};

export { Icon };
