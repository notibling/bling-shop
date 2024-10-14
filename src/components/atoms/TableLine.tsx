import classNames from 'classnames';
import React from 'react';

const TableLine = ({ componente, atributos, maxAttributes }:any) => {
  const attributeWidth = 100 / (maxAttributes + 1); // Calcula el ancho proporcional

  return (
    <div className='w-full flex flex-row   flex-nowrap justify-between items-center border-b border-slate-700 p-2'>
      <div className='w-auto  mr-2 text-xs font-medium bling-light-text dark:text-white text-ellipsis overflow-hidden hover:overflow-visible ' style={{ width: `${attributeWidth}%` }}>
        {componente}
      </div>
      {atributos.map((atributo:any, index:any) => (
        <div key={index} className={classNames('w-fit', 'text-xs', 'bling-light-text dark:bling-dark-text', 'text-ellipsis', 'overflow-hidden', 'hover:overflow-visible', 'text-right', { width: `${attributeWidth}%` })}>
          {atributo}
        </div>
      ))}
    </div>
  );
};

export { TableLine };
