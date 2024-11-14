import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { FaCreditCard, FaInfoCircle, FaMoneyBillAlt } from 'react-icons/fa';
import { Button, Checkbox, Icon, Title } from '@/components/atoms';
import { FaMoneyBillTransfer, FaShop } from 'react-icons/fa6';
import { useStepper } from '@/components/organisms/Stepper';
import { ICreateProductStepperState } from '../../types';
import { Card2, InfoSquare } from '@/icons/tsx';

interface ProductPaymentProps { }

interface IOptions {
  paymentMethods: string[];
}


const ProductPayment: React.FC<ProductPaymentProps> = ({ }) => {
  const stepper = useStepper<ICreateProductStepperState>();
  const [state, setState] = useState<IOptions>({
    paymentMethods: []
  });

  const togglePaymentMethod = (key: string) => {

    if (state.paymentMethods.includes(key)) {setState((prev) => ({ ...prev, paymentMethods: prev.paymentMethods.filter((item) => item !== key) }));} else {setState((prev) => ({ ...prev, paymentMethods: [...prev.paymentMethods, key] }));}

  };

  useEffect(() => {
    stepper.setState((stepperState) => ({ ...stepperState, paymentMethods: state.paymentMethods }));
  }, [state]);

  useEffect(() => {
    setState({ paymentMethods: stepper.state?.paymentMethods ?? [] });
  }, []);

  return (
    <>
      <div className='w-full h-auto  p-4 flex items-center justify-center flex-col gap-3'>
        <Title icon={<Icon name={Card2} size={20} color='#ffcc00' />} title='Metodos de Pago' level='p' className={'bling-light dark:bling-dark rounded-md '} iconClassName='!p-2 !pr-0' titleClassName={'pr-3'} />
      </div>
      
      <div className={classNames('w-full', 'lg:w-1/2', 'rounded-brand', 'overflow-hidden', 'border', 'bling-light-border', 'dark:bling-dark-border')}>
        <table className='w-full  p-1  '>
          <thead>
            <tr className={classNames(' bling-light-bg-2', 'dark:bling-dark-bg-5', 'text-slate-100', 'text-center')}>
              <th className={classNames('py-2', 'bling-light-text', 'dark:bling-dark-text', 'text-sm', 'px-4')}>Flexibilidad financiera</th>
              
            </tr>
          </thead>
          <tbody className='w-full'>
         
            <tr className='w-full px-3  flex flex-row flex-nowrap   bling-light-bg-3 dark:bling-dark-bg-3 '>
              <td className='w-full px-3 py-2 text-sm flex flex-row gap-2 items-center'>
                <span className='text-sm bling-light-text dark:bling-dark-text flex flex-row items-start justify-center gap-3'><Icon name={InfoSquare} size={20} />¿Qué métodos de pagos aceptas?.</span>
              </td>
            </tr>

            <tr className='w-full p-3 grid grid-cols-1 lg:grid-cols-2 border dark:border-bling-dark-bg-5 flex-nowrap bling-light dark:bling-dark-bg-4'>
              <td className='col-span-1  p-3  flex flex-row flex-nowrap gap-2 items-center dark:bling-dark-text bling-light-text'>
                <Checkbox onChange={() => togglePaymentMethod('cash')} checked={state.paymentMethods.includes('cash')} />
                <span className='text-2xl'>
                  <FaShop />
                </span>
                <span className='text-sm'>Efectivo</span>
              </td>
              <td className='col-span-1  p-3  flex flex-row flex-nowrap gap-2 items-center dark:bling-dark-text bling-light-text'>
                <Checkbox onChange={() => togglePaymentMethod('wire_transfer')} checked={state.paymentMethods.includes('wire_transfer')} />
                <span className='text-2xl'>
                  <FaMoneyBillTransfer />
                </span>
                <span className='text-sm'>Transferencia</span>
              </td>
            </tr>
            <tr className='w-full p-3 grid grid-cols-1 lg:grid-cols-2 border dark:border-bling-dark-bg-5 flex-nowrap bling-light dark:bling-dark-bg-4'>

              <td className='col-span-1  p-3  flex flex-row flex-nowrap gap-2 items-center dark:bling-dark-text bling-light-text'>
                <Checkbox onChange={() => togglePaymentMethod('debit_card')} checked={state.paymentMethods.includes('debit_card')} />
                <span className='text-2xl'>
                  <FaMoneyBillAlt />
                </span>
                <span className='text-sm'>Débito</span>
              </td>
              <td className='col-span-1  p-3  flex flex-row flex-nowrap gap-2 items-center dark:bling-dark-text bling-light-text'>
                <Checkbox onChange={() => togglePaymentMethod('credit_card')} checked={state.paymentMethods.includes('credit_card')} />
                <span className='text-2xl'>
                  <FaCreditCard />
                </span>
                <span className='text-sm'>Crédito</span>
              </td>
            </tr >
            <tr className='w-full flex flex-row flex-nowrap '>
              <td className='w-full p-3 flex flex-col items-center justify-center gap-1 bling-light dark:bling-dark-bg-3 text-center'>
                <div className='flex items-center gap-1'>
                  <span className='text-sm text-bling-yellow'>
                    <FaInfoCircle />
                  </span>
                  <span className='text-xs bling-light-text dark:bling-dark-text'>
      Conocé más acerca de <b><u>comisiones y tasas de interés.</u></b> <a
                      className='font-bold text-bling-yellow hover:underline cursor-pointer'
                      href=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <u>Saber Más</u>
                    </a>
                  </span>
                </div>
  
              </td>
            </tr>


          </tbody ></table>
        <div className={classNames('w-full', 'min-h-20', 'h-auto', 'bling-light-bg-3', 'p-4', 'bling-light-text', 'dark:bling-dark-text', 'lg:flex-nowrap', 'flex', 'flex-row', 'justify-center', 'items-center', 'text-sm', 'gap-2', 'dark:bling-dark-bg-3', 'font-bold')}>
          <span>Mantener esta configuración para todos los productos </span>
          <Button text='Guardar' className='w-fit h-auto p-2 px-3 flex bg-bling-yellow  text-slate-700 rounded-brand flex-row flex-nowrap '/>
        </div>
      </div>
    </>
  );
};

export { ProductPayment };
