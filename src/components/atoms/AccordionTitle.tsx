'use client';
import React, { useState } from 'react';
import classNames from 'classnames';
import { Switch } from '@/components/atoms';

interface AccordionTitleProps {
  content?: 'icon' | 'checkbox' | 'text' | 'switch';
  icon?: React.ReactNode | React.ReactNode[] | number | boolean | any;
  text?: string;
  className?: string | undefined | any;
  showText?: boolean | undefined; 
}

const AccordionTitle: React.FC<AccordionTitleProps> = ({ content, icon, text, className, showText = true }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const renderContent = () => {
    switch (content) {
      case 'icon':
        return (
          <div className={classNames('w-full', 'rounded-md', 'h-10', 'gap-1', 'px-4', 'flex', 'flex-row', 'dark:bling-dark', 'bling-light', 'text-bling-light-text', 'dark:text-bling-dark-text', 'clickable', showText ? 'justify-start' : 'justify-center', 'items-center')}>
            {icon && <span className={classNames(showText ? 'justify-start, min-w-[25px]' : 'justify-center min-w-[auto]')}>{icon}</span>}
            {showText && text && <span>{text}</span>}
          </div>
        );
      case 'checkbox':
        return (
          <div className='flex flex-row items-center justify-start gap-1'>
            <span className='min-w-[25px]'>
              <input type='checkbox' />
            </span>
            {showText && text && <span>{text}</span>}
          </div>
        );
      case 'text':
        return <div className={classNames('flex', 'flex-row', 'items-center', 'px-4', 'justify-start', 'gap-1', className)}>{showText && text}</div>;
      case 'switch':
        return (
          <div className='flex flex-row items-center justify-start gap-1'>
            <Switch checked={false} onChange={() => {}} className='mr-2' switchClass='bg-blue-600' sliderClass='bg-yellow-400' />
            {showText && text && <span>{text}</span>}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <ul className={classNames(className, { active: isActive })} onClick={handleClick}>
      <li
        tabIndex={0}
        className={classNames('w-auto', 'h-auto', 'flex', 'flex-row', 'justify-between', 'items-center', { focus: isActive })}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <div
          className={classNames(
            'w-full',
            'text-[12px]',
            'bling-light',
            'clickable',
            'rounded-md',
            'dark:bling-dark',
            'bling-bright',
            'font-bold',
            'flex',
            'flex-row',
            'items-center',
            'min-h-[45px]',
            { active: isActive }
  
          )}
        >
          {renderContent()}
        </div>
      </li>
    </ul>
  );
};

export { AccordionTitle };
