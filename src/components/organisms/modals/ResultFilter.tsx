'use client';
import React, { useState } from 'react';
import classNames from 'classnames';
import { Button, Input, Item, AccordionTitle } from '@/components/atoms';
import { Accordion } from '@/components/organisms';

import {
  FaArrowLeft,
  FaArrowRight,
  FaBuilding,
  FaCalendarDay,
  FaCheckCircle,
  FaCircle,
  FaClock,
  FaCreditCard,
  FaCube,
  FaDollarSign,
  FaEquals,
  FaHeart,
  FaHourglass,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaPalette,
  FaRegCreditCard,
  FaTruck,
  FaTshirt,
  FaUserAstronaut
} from 'react-icons/fa';
import { FaArrowRotateLeft, FaRotate, FaShop, FaTruckFast } from 'react-icons/fa6';

const prices = [
  { icon: <FaArrowLeft />, text: 'menos de $1000' },
  { icon: <FaEquals />, text: 'desde $1000' },
  { icon: <FaEquals />, text: 'hasta $5000' },
  { icon: <FaEquals />, text: 'hasta $10.000' },
  { icon: <FaArrowRight />, text: 'desde $10.000' }
];

const colors = [
  { color: 'Negro', class: 'text-black' },
  { color: 'Rojo', class: 'text-red-500' },
  { color: 'Naranja', class: 'text-orange-500' },
  { color: 'Marrón', class: 'text-amber-600' },
  { color: 'Amarillo', class: 'text-yellow-500' },
  { color: 'Verde', class: 'text-green-500' },
  { color: 'Azul', class: 'text-blue-500' },
  { color: 'Púrpura', class: 'text-purple-500' },
  { color: 'Rosado', class: 'text-pink-500' },
  { color: 'Blanco', class: 'text-white' }
];

const sizes = [
  { size: 'Pequeño', data: 'xs' },
  { size: 'Mediano', data: 'sm' },
  { size: 'Grande', data: 'lg' },
  { size: 'Extra Grande', data: 'xl' }
];

const ResultFilter: React.FC = () => {
  const [allOpen, setAllOpen] = useState(false);

  const toggleAll = () => {
    setAllOpen((prevState) => !prevState);
  };

  return (
    <div className='flex flex-col items-start justify-start w-full h-auto gap-1'>
      <Button
        text={allOpen ? 'Ocultar filtros' : 'Mostrar filtros'}
        className={classNames(
          'w-full h-[45px] font-bold rounded-md flex flex-row gap-2 justify-center items-center',
          {
            'bg-bling-yellow': allOpen,
            'dark:bling-dark bg-white bling-bright focus:text-slate-900 active:text-slate-700 ': !allOpen
          }
        )}
        onClick={toggleAll}
      ></Button>
      <Accordion trigger={<AccordionTitle content='icon' icon={<FaCube className={classNames('w-[15px]', 'h-[15px]', 'gap-1', 'mx-4')} />} text='Condición' />} defaultValue={allOpen}>
        <Item content='icon' icon={<FaHourglass />} text='Nuevo' />
        <Item content='icon' icon={<FaArrowRotateLeft />} text='Usado' />
        <Item content='icon' icon={<FaRotate />} text='Refabricado' />
      </Accordion>
      <Accordion trigger={<AccordionTitle content='icon' icon={<FaDollarSign className={classNames('w-[15px]', 'h-[15px]', 'mx-4')} />} text='Precios' />} defaultValue={allOpen}>
        <div className='flex flex-row items-center justify-between w-full gap-2 p-2 rounded-bold'>
          <Input type='number' className='h-[40px] w-1/2' placeholder='$ Desde' />
          <Input type='number' className='h-[40px] w-1/2' placeholder='$ Hasta' />
        </div>
        <div className='flex flex-col w-full gap-1'>
          {prices.map((price, index) => (
            <Item key={index} content='icon' icon={price.icon} text={price.text} />
          ))}
        </div>
      </Accordion>
      <Accordion trigger={<AccordionTitle content='icon' icon={<FaCreditCard className={classNames('w-[15px]', 'h-[15px]', 'mx-4')} />} text='Forma de Pago' />} defaultValue={allOpen}>
        <div className='flex flex-col w-full gap-1'>
          <Item content='icon' icon={<FaMoneyBill />} text='Efectivo' />
          <Item content='icon' icon={<FaCreditCard />} text='Débito' />
          <Item content='icon' icon={<FaRegCreditCard />} text='1 Cuota' />
          <Item content='icon' icon={<FaRegCreditCard />} text='3 Cuotas' />
          <Item content='icon' icon={<FaRegCreditCard />} text='6 Cuotas' />
          <Item content='icon' icon={<FaRegCreditCard />} text='12 Cuotas' />
        </div>
      </Accordion>
      <Accordion trigger={<AccordionTitle content='icon' icon={<FaShop className={classNames('w-[15px]', 'h-[15px]', 'mx-4')} />} text='Vendedores' />} defaultValue={allOpen}>
        <div className='flex flex-col w-full gap-1'>
          <Item content='icon' icon={<FaCheckCircle />} text='Verificados' />
          <Item content='icon' icon={<FaUserAstronaut />} text='Emprendedores' />
          <Item content='icon' icon={<FaBuilding />} text='Fabricantes' />
        </div>
      </Accordion>
      <Accordion trigger={<AccordionTitle content='icon' icon={<FaTruck className={classNames('w-[15px]', 'h-[15px]', 'mx-4')} />} text='Tipos de Enviós' />} defaultValue={allOpen}>
        <div className='flex flex-col w-full gap-1'>
          <Item content='icon' icon={<FaHeart />} text='Envió gratis' />
          <Item content='icon' icon={<FaMapMarkerAlt />} text='Envió a Todo el País' />
          <Item content='icon' icon={<FaTruckFast />} text='Envió en el día' />
          <Item content='icon' icon={<FaClock />} text='Envió 24 a 48 hs' />
          <Item content='icon' icon={<FaCalendarDay />} text='Acordar con el vendedor' />
        </div>
      </Accordion>
      <Accordion trigger={<AccordionTitle content='icon' icon={<FaPalette className={classNames('w-[15px]', 'h-[15px]', 'mx-4')} />} text='Colores' />} defaultValue={allOpen}>
        <div className='flex flex-col w-full gap-1'>
       
          {colors.map((color, index) => (
            <Item key={index} content='icon' icon={<FaCircle className={color.class} />} text={color.color} />
          ))}
      
        </div>
      </Accordion>
      <Accordion trigger={<AccordionTitle content='icon' icon={<FaTshirt className={classNames('w-[15px]', 'h-[15px]', 'mx-4')} />} text='Tamaños' />} defaultValue={allOpen}>
        <div className='flex flex-col w-full gap-1'>
      
          {sizes.map((size, index) => (
            <Item key={index} content='data' data={size.data} text={size.size} />
          ))}
      
        </div>
      </Accordion>
    </div>
  );
};

export { ResultFilter };
