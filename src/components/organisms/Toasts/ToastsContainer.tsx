import React from 'react';
import classNames from 'classnames';

import { IToast, IToastsContext } from './Toasts.types';
import { Toast } from './Toast';

interface IToastsContainerProps {
  toasts: IToast[];
  hide: IToastsContext['hide'];
}

const ToastsContainer: React.FC<IToastsContainerProps> = ({ toasts, hide }) => {
  return (
    <div className={classNames(
      'h-auto', 'w-[200px]',
      'fixed', 'bottom-0', 'right-0',
      'z-10', 'flex', 'flex-col', 'gap-2',
      'mx-20', 'pb-12')}>
      {toasts.map(toast => (
        <Toast
          duration={toast.duration}
          key={toast.id}
          type={toast.type}
          onClose={() => hide(toast.id)}
        >{toast.message}</Toast>
      ))}
    </div>
  );
};

export { ToastsContainer };