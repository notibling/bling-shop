import React, { useMemo } from 'react';
import classNames from 'classnames';
import { FaHandsHoldingCircle } from 'react-icons/fa6';

import { useStepper } from '@/components/organisms';
import { Button, Section, Icon, Title} from '@/components/atoms';

interface SelectElementProps {}
type ProductType = 'product' | 'service' | 'vehicle' | 'property';

interface ProductTypeOption {
  value: ProductType;
  label: string;
  icon: JSX.Element;
  description: string;
  requirements: string;
}

const options: ProductTypeOption[] = [
  {
    value: 'product',
    label: 'Producto',
    icon: <Icon name="Box" color="text-slate-700" size={51}   />,
    description: 'Crea un producto categorizado, asigna variantes, administra tu stock y tus precios, aumenta las ventas con publicaciones de alta calidad.',
    requirements: '1 Imagen de producto con fondo blanco / 5 Imágenes de producto / Título 60 Caracteres / Descripción 500 Caracteres / Stock / Precio',
  },
  {
    value: 'service',
    label: 'Servicio',
    icon: <Icon name="User" color="text-slate-700" size={51}   />,
    description: 'Define los servicios que ofreces, ajusta tus horarios, precios y detalles para llegar a más clientes.',
    requirements: '1 Imagen representativa / Descripción del servicio / Horarios disponibles / Precio',
  },
  {
    value: 'vehicle',
    label: 'Vehículo',
    icon: <Icon name="Wheel" color="text-slate-700" size={51}   />,
    description: 'Publica vehículos a la venta, incluyendo todas las especificaciones técnicas y detalles importantes.',
    requirements: 'Imágenes del vehículo / Marca y modelo / Año / Kilometraje / Precio',
  },
  {
    value: 'property',
    label: 'Inmueble',
    icon: <Icon  name="House" color="text-slate-700" size={51}   />,
    description: 'Anuncia inmuebles con todos los detalles necesarios para atraer compradores o arrendatarios.',
    requirements: 'Imágenes del inmueble / Ubicación / Área / Precio / Descripción completa',
  },
];

const SelectElement: React.FC<SelectElementProps> = ({}) => {
  const stepper = useStepper<{ type?: ProductType }>();

  const handleButtonClick = (type: ProductType) => {
    stepper.setState((prev) => ({ ...prev, type }));
  };

  const content = useMemo(() => {
    const type = stepper.state?.type || 'product';
    return options.find((option) => option.value === type);
  }, [stepper.state]);

  return (
    <>
     
      <div className="w-full h-auto  p-4 flex items-center justify-center flex-col gap-3">
     <Title icon={<FaHandsHoldingCircle color="#ffcc00"/>} title='Quiero Ofrecer' level='p' className={'bling-light dark:bling-dark rounded-md '} iconClassName='!pr-0' titleClassName={'pr-2'} />
      </div>
     
      
        <div className={classNames('w-full', 'lg:w-1/2', 'h-auto','lg:gap-3', 'flex-wrap', 'lg:flex-nowrap', 'flex', 'flex-row', 'justify-center', 'items-center')}>
          {options.map((option) => (
            <div key={option.value} className={classNames('w-1/2', 'lg:w-28', 'h-auto', 'flex-col', 'rounded-brand', 'p-2', 'flex', 'justify-center', 'items-center')}>
              <Button
                icon={option.icon}
                onClick={() => handleButtonClick(option.value)}
                className={classNames('w-28', 'h-28', 'flex-grow', 'bling-light','dark:bling-dark', 'outline-none','transition-all', 'duration-75', 'rounded-brand',  'cursor-pointer',  'text-slate-700', 'text-3xl', {
                  '!bling-btn-primary-dark ': stepper.state?.type === option.value,
                  'hover:bg-white hover:scale-110': stepper.state?.type !== option.value,
                })}
              />

              <span className={classNames('p-3', 'text-sm', 'font-bold', 'bling-light-text','dark:bling-dark-text')}>{option.label}</span>
            </div>
          ))}
        </div>

        <div className={classNames('w-full', 'lg:w-1/2', 'h-auto', 'lg:gap-3', 'flex-wrap', 'lg:flex-nowrap', 'flex', 'flex-row', 'justify-center', 'items-center')}>
          <div className="w-full bling-light dark:bling-dark border bling-light-border dark:bling-dark-border p-3 text-sm text-slate-200 rounded-md">
            <span id="description">{content?.description}</span>

            <div className="grid grid-cols-1 my-3 border-b bling-light-border dark:bling-dark-border "></div>
            <div className="text-[10px] gap-2 flex-row flex justify-start align-top items-start">
              <span className="mr-1 bling-badge  w-fit font-bold">Requerido:</span>
              <span id="requirements">{content?.requirements}</span>
            </div>
          </div>
        </div>

        <div className={classNames('w-full', 'lg:w-1/2', 'h-auto', 'lg:gap-3', 'flex-wrap', 'p-5', 'lg:flex-nowrap', 'flex', 'flex-row', 'justify-center', 'items-center')}>
          <Button text="Comenzar" disabled={!stepper.state?.type} onClick={stepper.nextStep} className="order-2 w-[200px] btn-md bling-btn-primary dark:bling-btn-primary-dark" />
        </div>

    </>
  );
};

export { SelectElement };
