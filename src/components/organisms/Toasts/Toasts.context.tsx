'use client'
import { createContext, useContext, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';


import { NumberUtils } from '@/utils';
import { ToastsContainer } from './ToastsContainer';

import { IToast, IToastsContext } from './Toasts.types';
import { NoSSR } from '@/components/molecules';


const ToastsContext = createContext<IToastsContext>({
  toasts: [],
  show: () => Promise.resolve(0),
  hide() { },
  clear() { },

  success: () => Promise.resolve(0),
  error: () => Promise.resolve(0),
  warning: () => Promise.resolve(0),
  info: () => Promise.resolve(0),
});

interface IToastsProviderProps {
  children: React.ReactNode;
}

const ToastsProvider: React.FC<IToastsProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<IToast[]>([]);


  const success = (message: string, duration?: number) =>
    show({ message, type: 'success', duration });

  const error = (message: string, duration?: number) =>
    show({ message, type: 'error', duration });

  const warning = (message: string, duration?: number) =>
    show({ message, type: 'warning', duration });


  const info = (message: string, duration?: number) =>
    show({ message, type: 'info', duration });


  const show = (toast: Omit<IToast, 'id'> & { id?: number }) => {
    return new Promise<number>((resolve) => {
      const generatedId = toast.id ?? NumberUtils.random();

      setToasts(prev => [...prev, { ...toast, id: generatedId }]);

      resolve(generatedId);
    });
  }

  const hide = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }

  const clear = () => {
    setToasts([]);
  }

  const toastsContainer = useMemo(() => {
    const node = typeof document !== 'undefined' ? document.body : null;

    if (!node) return <></>;

    return createPortal(
      <ToastsContainer toasts={toasts} hide={hide} />,
      node
    )
  }, [toasts])

  return (
    <ToastsContext.Provider value={{ toasts, show, success, error, warning, info, hide, clear }}>
      <>
        {children}

        <NoSSR><>{toastsContainer}</> </NoSSR>
      </>
    </ToastsContext.Provider>
  )
}

const useToasts = () => {
  return useContext(ToastsContext)
}

export { ToastsProvider, useToasts }