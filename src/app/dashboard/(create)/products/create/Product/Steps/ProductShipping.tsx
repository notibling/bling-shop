import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Button, Checkbox, Icon, Item, Title } from '@/components/atoms';
import { TagsInput } from '@/components/molecules';
import { Dropdown } from '@/components/organisms';
import { FaDolly, FaHourglassStart, FaStore, FaTruck } from 'react-icons/fa';
import { FaTruckFast, FaUserCheck } from 'react-icons/fa6';
import { useStepper } from '@/components/organisms/Stepper';
import { ICreateProductStepperState } from '../../types';
import { PiScooterBold } from 'react-icons/pi';
import { InfoSquare } from '@/icons/tsx';


interface ProductShippingProps {
  shippings?: string[];
}

interface IOptions {
  sellingZone: string[];
  shippingCost: number | null;
  hasShipping: boolean;
  pickupLocation: string;
}

const ProductShipping: React.FC<ProductShippingProps> = ({ }) => {
  const stepper = useStepper<ICreateProductStepperState>();
  const [state, setState] = useState<IOptions>({
    sellingZone: [],
    hasShipping: false,
    pickupLocation: '',
    shippingCost: null
  });


  const setStateField = (key: keyof IOptions, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    stepper.setState((stepperState) => ({ ...stepperState, ...state }));
  }, [state]);

  useEffect(() => {
    const {
      sellingZone,
      shippingCost,
      hasShipping,
      pickupLocation
    } = stepper.state ?? {};

    setState({
      sellingZone: sellingZone ?? [],
      shippingCost: shippingCost ?? null,
      hasShipping: hasShipping ?? false,
      pickupLocation: pickupLocation ?? ''
    });
  }, []);


  return (
    <>

      <div className='w-full h-auto  p-4 flex items-center justify-center flex-col gap-3'>
        <Title icon={<Icon name={PiScooterBold} size={20} color='#ffcc00' />} title='Gestión de envíos' level='p' className={'bling-light dark:bling-dark rounded-md '} iconClassName='!p-2 !pr-0' titleClassName={'pr-3'} />
      </div>
  
      <div className={classNames('w-full', 'lg:w-1/2', 'rounded-brand', 'overflow-hidden', 'border', 'bling-light-border', 'dark:bling-dark-border')}>

        <table className='w-full  p-1  '>
          <thead>
            <tr className={classNames(' bling-light-bg-2', 'dark:bling-dark-bg-5', 'text-slate-100', 'text-center')}>
              <th className={classNames('py-2', 'bling-light-text', 'dark:bling-dark-text', 'text-sm', 'px-4')}>Cadena de Distribución</th>
              
            </tr>
          </thead>
          <tbody className='w-full '>
            <tr className='w-full px-3  flex flex-row flex-nowrap   bling-light-bg-3 dark:bling-dark-bg-3 '>
              <td className='w-full px-3 py-2 text-sm flex flex-row gap-2 items-center'>
                <span className='text-sm bling-light-text dark:bling-dark-text flex flex-row items-start justify-center gap-3'><Icon name={InfoSquare} size={20} />¿Quién entrega los envíos?.</span>
              </td>
            </tr>

            <tr className='w-full p-3 grid grid-cols-1 lg:grid-cols-3 border dark:border-bling-dark-bg-5 flex-nowrap bling-light dark:bling-dark-bg-4'>
              <td className='col-span-1  p-3  flex flex-row flex-nowrap gap-2 items-center dark:bling-dark-text bling-light-text'>
                <Checkbox onChange={() => setStateField('shippingCost', 0)} checked={state.shippingCost === 0} />
                <span className='text-2xl dark:bling-dark-text bling-light-text'>
                  <FaDolly />
                </span>
                <span className='text-sm'>Los entrego personalmente</span>
              </td>
              <td className='col-span-1 p-3  flex flex-row flex-nowrap gap-2 items-center dark:bling-dark-text bling-light-text'>
                <Checkbox onChange={(value) => setStateField('hasShipping', value)} checked={state.hasShipping} />
                <span className='text-2xl dark:bling-dark-text bling-light-text'>
                  <FaTruck />
                </span>
                <span className='text-sm'>Envio a traves de agencias</span>
              </td>
              <td className='col-span-1  p-3  flex flex-row flex-nowrap gap-2 items-center dark:bling-dark-text bling-light-text'>
                <Checkbox />
                <span className='text-2xl dark:bling-dark-text bling-light-text'>
                  <FaTruck />
                </span>
                <span className='text-sm'>No tenemos envíos</span>
              </td>
            </tr>
            <tr className='w-full px-3  flex flex-row flex-nowrap   bling-light-bg-3 dark:bling-dark-bg-3 '>
              <td className='w-full px-3 py-2 text-sm flex flex-row gap-2 items-center'>
                <span className='text-sm bling-light-text dark:bling-dark-text flex flex-row items-start justify-center gap-3'><Icon name={InfoSquare} size={20} /> ¿Dónde pueden retirar su producto tus clientes?</span>
              </td>
            </tr>
            <tr className='w-full p-3  border dark:border-bling-dark-bg-5 flex-nowrap   bling-light dark:bling-dark-bg-4 grid grid-cols-1 lg:grid-cols-3'>
              <td className='col-span-1 p-3 text-slate-700 flex flex-row flex-nowrap gap-2 items-center '>
                <Checkbox onChange={(value) => setStateField('pickupLocation', value ? 'local' : null)} checked={state.pickupLocation === 'local'} />
                <span className='text-2xl dark:bling-dark-text bling-light-text'>
                  <FaStore />
                </span>
                <span className='text-sm dark:bling-dark-text bling-light-text'>Retiro en Local</span>
              </td>
              <td className='col-span-1 p-3 text-slate-700 flex flex-row flex-nowrap gap-2 items-center'>
                <Checkbox onChange={(value) => setStateField('pickupLocation', value ? 'pickup' : null)} checked={state.pickupLocation === 'pickup'} />
                <span className='text-2xl dark:bling-dark-text bling-light-text'>
                  <FaUserCheck />
                </span>
                <span className='text-sm dark:bling-dark-text bling-light-text'>Retiro en Depósito</span>
              </td>
              <td className='col-span-1 p-3 text-slate-700 flex flex-row flex-nowrap gap-2 items-center '>
                <Checkbox onChange={(value) => setStateField('pickupLocation', value ? 'local' : null)} checked={state.pickupLocation === 'local'} />
                <span className='text-2xl dark:bling-dark-text bling-light-text'>
                  <FaStore />
                </span>
                <span className='text-sm dark:bling-dark-text bling-light-text'>No tenemos lugar de retiro</span>
              </td>
            </tr>
           
            <tr className='w-full px-3  flex flex-row flex-nowrap   bling-light-bg-3 dark:bling-dark-bg-3 '>
              <td className='w-full px-3 py-2 text-sm flex flex-row gap-2 items-center'>
                <span className='text-sm bling-light-text dark:bling-dark-text flex flex-row items-start justify-center gap-3'><Icon name={InfoSquare} size={20} />¿Cuánto tiempo dura el envío?.</span>
              </td>
            </tr>

         
            <tr className='w-full p-3 grid grid-cols-1 lg:grid-cols-2 border dark:border-bling-dark-bg-5 flex-nowrap   bling-light dark:bling-dark-bg-4'>
              <td className='col-span-1 p-3 text-slate-700 flex flex-row flex-nowrap gap-2 items-center '>
                <Checkbox onChange={(value) => setStateField('pickupLocation', value ? 'local' : null)} checked={state.pickupLocation}/>
                <span className='text-2xl dark:bling-dark-text bling-light-text'>
                  <FaTruckFast />
                </span>
                <span className='text-sm dark:bling-dark-text bling-light-text'>El envío llega en el día</span>
              </td>
              <td className='col-span-1 px-3 text-slate-700 flex flex-row flex-nowrap gap-2 items-center'>
                <Checkbox onChange={() => { }} />
                <span className='text-2xl dark:bling-dark-text bling-light-text'>
                  <FaHourglassStart />
                </span>
                <Dropdown
                  trigger={
                    <Button text='Tiempo Personalizado' className='min-w-[100px] w-auto btn-md px-3 py-1 h-auto text-nowrap text-xs bling-btn-primary dark:bling-btn-primary-dark text-slate-100 rounded-brand ' />
                  } bodyClassName='min-w-[200px] p-1'
                >
                  <Item content='text' text='+ 24 hs' />
                  <Item content='text' text='+ 48 hs' />
                  <Item content='text' text='+ 72 hs' />
                  <Item content='text' text='+ 3 días' />
                  <Item content='text' text='+ 1 semana' />
                  <Item content='text' text='+ 2 semanas' />
                  <Item content='text' text='+ 1 mes' />
             
                </Dropdown>
           
              </td>
            </tr> 
           
               
            <tr className='w-full px-3  flex flex-row flex-nowrap   bling-light-bg-3 dark:bling-dark-bg-3 '>
              <td className='w-full px-3 py-2 text-sm flex flex-row gap-2 items-center'>
                <span className='text-sm bling-light-text dark:bling-dark-text flex flex-row items-start justify-center gap-3'><Icon name={InfoSquare} size={20} />¿El costo del envío varía segun la zona?.</span>
              </td>
            </tr>
           

            <tr className='w-full flex flex-col '>
              <td className='w-full p-2 bling-light dark:bling-dark-bg-4  dark:border-bling-dark-bg-5 border  gap-2'>
                <TagsInput className='w-full bling-light dark:bling-dark  ' tags={state.sellingZone} setTags={(cb: any) => {
                  setStateField('sellingZone', cb(state.sellingZone));
                }} />
              </td>
            </tr>
            {state.sellingZone.map((_sellingZone) => (
              <React.Fragment key={_sellingZone}>
                <tr className='w-full flex flex-row p-3 bling-light dark:bling-dark-text gap-2 items-center dark:bling-dark-bg-4 text-sm dark:border-bling-dark-bg-5 border'>
                  <td className='w-2/3'>Envío hasta {_sellingZone}</td>

                  <td className='w-1/3 '>
                    <input type='number' className='w-full p-2 bling-light-bg-3 !outline-none  text-sm rounded-md dark:bling-dark-bg-3' placeholder={`$ ${_sellingZone}`} />
                  </td>
                </tr>
              </React.Fragment>
            ))}

            <tr className='w-full flex flex-row flex-nowrap '>
              <td className='w-full bling-light text-center p-3 dark:bling-dark-bg-3 flex flex-col gap-1 items-center'>
                <div className='text-center w-full text-sm'>
                  <span className='bling-light-text dark:bling-dark-text'>El costo actual de envío es de </span>
                  <span className='text-green-500'>$0.00 UY</span>
                </div>
                <span className='text-center text-xs w-full  bling-light-text dark:bling-dark-text '>
                  Puedes modificar los <u>costos generales</u> en la{' '}
                  <a className="font-bold cursor-pointer text-bling-yellow after:content-['[\2197]'] ..." href='' target='_blank'>
                    <u>Configuración</u>
                  </a><br />
                  o asignar un valor para sobrescribirlo (solo en este producto)
                </span>
                <a className=' py-2 cursor-pointer text-blue-500 hover:text-blue-400 text-center text-xs w-full font-bold '>&#187; CERRAR ESTE MENSAJE &#171;</a>
              </td>
            </tr>
            <tr className={classNames(' bling-light-bg-2', 'dark:bling-dark-bg-5', 'text-slate-100', 'text-center')}>
              <th className={classNames('py-2', 'bling-light-text', 'dark:bling-dark-text', 'text-sm', 'px-4')}>Cargo de envío</th>
              
            </tr>
           
        
            <tr className='w-full px-3  flex flex-row flex-nowrap   bling-light-bg-3 dark:bling-dark-bg-3 '>
              <td className='w-1/2 px-3 py-2 text-sm flex flex-row gap-2 items-center'>
                <span className='text-sm bling-light-text dark:bling-dark-text'>Costo del Envío a cargo de:</span>
              </td>
            </tr>


            <tr className='w-full p-3 grid grid-cols-1 lg:grid-cols-3 border dark:border-bling-dark-bg-5 flex-nowrap bling-light dark:bling-dark-bg-4'>
              <td className='col-span-1  p-3  flex flex-row flex-nowrap gap-2 items-center dark:bling-dark-text bling-light-text'>
                <Checkbox onChange={() => setStateField('shippingCost', 0)} checked={state.shippingCost === 0} />
                <span className='text-2xl dark:bling-dark-text bling-light-text'>
                  <FaDolly />
                </span>
                <span className='text-sm'>Costo a cargo del comprador</span>
              </td>
              <td className='col-span-1 p-3  flex flex-row flex-nowrap gap-2 items-center dark:bling-dark-text bling-light-text'>
                <Checkbox onChange={(value) => setStateField('hasShipping', value)} checked={state.hasShipping} />
                <span className='text-2xl dark:bling-dark-text bling-light-text'>
                  <FaTruck />
                </span>
                <span className='text-sm'>Costo a cargo de la empresa</span>
              </td>
              <td className='col-span-1 p-3  flex flex-row flex-nowrap gap-2 items-center dark:bling-dark-text bling-light-text'>
                <Checkbox onChange={(value) => setStateField('hasShipping', value)} checked={state.hasShipping} />
                <span className='text-2xl dark:bling-dark-text bling-light-text'>
                  <FaTruck />
                </span>
                <span className='text-sm'>Envío Gratis</span>
              </td>
            </tr>


          </tbody>
        </table>

        <div className={classNames('w-full', 'min-h-20', 'h-auto', 'bling-light-bg-3', 'p-4', 'bling-light-text', 'dark:bling-dark-text', 'lg:flex-nowrap', 'flex', 'flex-row', 'justify-center', 'items-center', 'text-sm', 'gap-2', 'dark:bling-dark-bg-3', 'font-bold')}>
          <span>Mantener esta configuración para todos los productos </span>
          <Button text='Guardar' className='w-fit h-auto p-2 px-3 flex bg-bling-yellow  text-slate-700 rounded-brand flex-row flex-nowrap '/>
        </div>
      </div>

    </>
  );
};

export { ProductShipping };
