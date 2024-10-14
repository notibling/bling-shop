'use client';
import React, { useState } from 'react';

interface Option {
  label: string;
  value: number;
  result: string; 
}

interface InputRangeProps {
  labelText?: string;
  options?: Option[];
  isStepped?: boolean; // Si es true, usa las opciones para el rango escalonado, de lo contrario usa un rango sencillo
  min?: number;
  max?: number;
  step?: number;
}

const InputRange: React.FC<InputRangeProps> = ({ labelText, options = [], isStepped = true, min = 1, max = 10, step = 1 }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10)); // Añadir el parámetro radix
  };

  return (
    <div className='flex flex-row justify-center items-center gap-2'>
      <label htmlFor='range'>{labelText}</label>
      <input
        type='range'
        id='range'
        name='range'
        min={isStepped ? Math.min(...options.map((option) => option.value)) : min}
        max={isStepped ? Math.max(...options.map((option) => option.value)) : max}
        step={isStepped ? 1 : step}
        value={value}
        onChange={handleChange}
      />
      <div>{isStepped ? options.find((option) => option.value === value)?.label : value}</div>
      <div>{isStepped && options.find((option) => option.value === value)?.result}</div>
    </div>
  );
};

export { InputRange };
