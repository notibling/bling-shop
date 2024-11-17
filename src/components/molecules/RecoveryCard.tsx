'use client';
import React, { ChangeEvent } from 'react';
import { Button, Icon, Input } from '../atoms';
import { Password } from '@/icons/tsx';
import { useDarkMode } from '@/hooks';

interface IRecoveryCardProps {
    iconName?: string;
  title?: string;
  description?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
  buttonLabel?: string; // Opcional para personalizar el texto del botón
  errorMessage?: string; // Opcional para validar y mostrar errores
}

function RecoveryCard({
  title,
  description,
  placeholder,
  iconName,
  value,
  onChange,
  onButtonClick,
  buttonLabel = 'Continuar', // Valor predeterminado
  errorMessage,
}: IRecoveryCardProps): React.JSX.Element {
    const isDarkMode = useDarkMode();
  return (
    <div className="flex w-[500px] h-auto p-10  bg-bling-light dark:bg-bling-dark-bg-2 flex-col rounded-md gap-4 shadow-md">
      <div className="flex w-full h-auto p-1 flex-col items-center justify-center gap-2">
        {iconName && ( <Icon 
    name={iconName} 
    size={80} 
    color={isDarkMode ? '#64748b' : 'text-bling-light-text'}
    frozen={false}
  />)}
        <h2 className="text-2xl text-bling-light-text  dark:text-white font-bold text-center">{title}</h2>
        <p className="text-xs  text-bling-light-text dark:text-bling-dark-text text-center">{description}</p>
      </div>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={errorMessage}
      />
      <Button
        onClick={onButtonClick}
        className="btn w-full self-center h-12 bling-btn-default dark:bling-btn-default-dark text-white"
      >
        {buttonLabel}
      </Button>
    </div>
  );
}

export default RecoveryCard;
