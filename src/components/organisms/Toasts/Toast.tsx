'use client';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { IoIosClose } from 'react-icons/io';

interface IToastProps {
  children: React.ReactNode;
  className?: string;
  type: 'error' | 'success' | 'warning' | 'info';
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<IToastProps> = ({ children, className, onClose, duration }) => {
  const [animationClassName, setAnimationClassName] = useState('fade-in-up');
  const [hiding, setHiding] = useState(false);

  function close() {
    setAnimationClassName('fade-out-down');
    setHiding(true);
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (duration) {
      timer = setTimeout(() => close(), duration);
    }
    return () => {
      if (timer) clearTimeout(timer);// Limpieza del temporizador
    };
  }, [duration]); // Agregar `duration` como dependencia

  useEffect(() => {
    if (hiding) {
      const hideTimer = setTimeout(() => {
        onClose && onClose();
      }, 500);
      return () => clearTimeout(hideTimer);  // Limpieza del temporizador
    }
  }, [hiding, onClose]);

  return (
    <div
      className={classNames(
        'bg-black',
        'text-white',
        'rounded',
        'px-4',
        'py-2',
        'text-sm',
        'flex',
        'flex-row',
        'gap-2',
        'justify-between',
        'w-full',
        '!transition-all',
        '!duration-300',
        className,
        animationClassName
      )}
    >
      {children}
      {onClose && (
        <button className={classNames('text-lg')} onClick={close}>
          <IoIosClose />
        </button>
      )}
    </div>
  );
};

export { Toast };
