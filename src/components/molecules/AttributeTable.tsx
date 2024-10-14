'use client';
import React, { useState } from 'react';
import { Button, Title, TableLine, Separator } from '@/components/atoms'; // Ajusta la ruta según tu estructura de proyecto

const AttributeTable = ({ attributes }: any) => {
  const maxAttributes = Math.max(...attributes.map((attr:any) => attr.atributos.length)); // Encuentra el número máximo de atributos
  const [showAll, setShowAll] = useState(false);

  const normalizedAttributes = attributes.map((attribute:any) => ({
    ...attribute,
    atributos: [...attribute.atributos, ...Array(maxAttributes - attribute.atributos.length).fill('')] // Rellena con valores vacíos si es necesario
  }));

  const visibleAttributes = showAll ? normalizedAttributes : normalizedAttributes.slice(0, 5);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className='flex flex-col items-center justify-between w-full h-auto rounded-md'>
      <div className='flex flex-row items-center justify-start w-full h-auto p-2'>
        <Title title='Atributos' level='h4' />
      </div>
      <div className='flex flex-wrap items-center justify-start w-full'>
        {visibleAttributes.map((attribute:any, index:any) => (
          <TableLine key={index} componente={attribute.componente} atributos={attribute.atributos} maxAttributes={maxAttributes} />
        ))}
        {attributes.length > 5 && (
          <div className='flex flex-row items-center justify-center w-full gap-1 mt-2 flex-nowrap'>
            <Separator noText />
            <Button className='flex px-4 text-sm bling-light-text dark:bling-dark-text rounded-md bling-btn-secondary text-nowrap flex-nowrap ' onClick={toggleShowAll}>
              {showAll ? 'Ver menos' : 'Ver más'}
            </Button>
            <Separator noText />
          </div>
        )}
      </div>
    </div>
  );
};

export { AttributeTable };
