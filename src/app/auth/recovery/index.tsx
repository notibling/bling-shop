'use client';
import React from 'react';
import classNames from 'classnames';
import { Button, Icon, Section } from '@/components/atoms';
import { ArrowLeft, Letter, Password } from '@/icons/tsx';
import { useDarkMode } from '@/hooks';


interface IRecoveryTypeProps {
  onSelect: (type: 'password' | 'email') => void;
}

function RecoveryType({ onSelect }: IRecoveryTypeProps): React.JSX.Element {
  // Usamos el hook `useDarkMode` para obtener el estado del modo oscuro
  const isDarkMode = useDarkMode();

  return (
    <Section Empty={true} className='!bg-transparent flex h-full flex-col items-center justify-center'>
        
      <div
        className={classNames(
          'flex',
          'w-full',
          'flex-grow',
          'h-auto',
          'relative',
          'justify-center',
          'gap-8',
          'p-5'
        )}
      >
        {/* Card para Recuperar Contraseña */}
        <div
          className={classNames(
            'flex',
            'w-[300px]',
            'h-auto',
            'bg-bling-light',
            'dark:bg-bling-dark-bg-2',
            'flex-col',
            'text-bling-light-text',
            'dark:bling-dark-text',
            'rounded-md',
            'shadow-lg',
            'gap-4',
            'items-center',
            'justify-center',
            'p-5'
          )}
        >
          {/* El ícono cambiará de color dependiendo del modo oscuro */}
          <Icon name={Password} size={80} color={isDarkMode ? '#64748b' : 'text-bling-light-text'} frozen={false} />
          <h2 className='text-lg font-semibold dark:text-white'>¿Olvidó su contraseña?</h2>
          <p className='text-sm text-center dark:bling-dark-text text-bling-light-text'>
            Restablezca su contraseña en unos pocos pasos.
          </p>
          <Button
            onClick={() => onSelect('password')}
            className={classNames('btn', 'w-10/12', 'h-12', 'bling-btn-default', 'dark:bling-btn-default-dark')}
          >
            Recuperar Contraseña
          </Button>
        </div>

        {/* Card para Recuperar Email */}
        <div
          className={classNames(
            'flex',
            'w-[300px]',
            'h-auto',
            'bg-bling-light',
            'dark:bg-bling-dark-bg-2',
            'text-bling-light-text',
            'flex-col',
            
            'dark:bling-dark-text',
            'rounded-md',
            'shadow-lg',
            'gap-4',
            'items-center',
            'justify-center',
            'p-5'
          )}
        >
              <Icon name={Letter} size={80} color={isDarkMode ? '#64748b' : 'text-bling-light-text'} frozen={false} />
          <h2 className='text-lg font-semibold dark:text-white'>¿Olvidó su email?</h2>
          <p className='text-sm text-center dark:bling-dark-text text-bling-light-text'>
            Recupere su email asociado con su cuenta.
          </p>
          <Button
            onClick={() => onSelect('email')}
            className={classNames('btn', 'w-10/12', 'h-12', 'bling-btn-default', 'dark:bling-btn-default-dark')}
          >
            Recuperar Email
          </Button>
        </div>
        
      </div>
      
      <Button
                link='/auth'
            iconLeft={ArrowLeft}
            
            className={classNames('w-[200px]', 'px-10', 'h-12', 'bling-btn-default', 'dark:bling-btn-default-dark')}
          >
            Regresar
          </Button>     
      
    </Section>
  );
}

export default RecoveryType;
