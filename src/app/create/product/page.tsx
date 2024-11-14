'use client';
import React from 'react';
import classNames from 'classnames';
import { FaBoxesStacked, FaMoneyBillTrendUp } from 'react-icons/fa6';
import { FaBox, FaInfoCircle } from 'react-icons/fa';
import { ICreateProductStepperState } from './types';
import { Button, Icon, Title } from '@/components/atoms';
import { ProductCategory } from './ProductCategory';
import { Step, StepperHOC, UserButton, useStepper } from '@/components/organisms';
import { ProductIdentity } from './ProductIdentity';
import { ProductAttribute } from './ProductAttributes';
import { ProductVariantsV2 } from './ProductVariantsV2';
import { ProductShipping } from './ProductShipping';
import { ProductPayment } from './ProductPayment';
import { ProductSuccess } from './ProductSuccess';
import { ArrowLeft, ArrowRight } from '@/icons/tsx';


const defaultStepperValue: ICreateProductStepperState = {
  type: undefined,
  title: '',
  sku: '',
  upc: '',
  images: [],
  description: '',
  categories: [],
  sellingZone: [],
  shippingCost: null,
  hasShipping: false,
  pickupLocation: '',
  paymentMethods: [],
  condition: null,
  variants: [],
  attributes: []
};

const CreateProduct: React.FC<React.PropsWithChildren<ICreateProductStepperState>> = StepperHOC<ICreateProductStepperState>({
  defaultValue: defaultStepperValue,
  id: 'create-product',
  persistState: true
}, ({ children }) => {
  const stepper = useStepper();
  return (
    <>
      {children}
      <div className={classNames('w-full', 'min-h-[100dvh]', 'h-auto', 'rounded-sm', 'flex', 'p-4', 'flex-col', 'justify-between', 'items-center', 'bling-bg-dots-light', 'dark:bling-bg-dots-dark')}>
        <div className={classNames('w-full', 'h-auto', 'p-2', 'min-h-full', 'grow', 'justify-between', 'flex', 'flex-col')}>
          <div className={classNames('w-full', 'h-auto', 'rounded-sm', 'flex', 'lg:flex-nowrap', 'flex-wrap', 'gap-2', 'justify-between', 'items-center', 'py-2')}>
            <div className={classNames('w-full', 'flex-wrap', 'lg:flex-nowrap', 'gap-2', 'flex')}>
              <Title icon={<FaBox />} iconColor='text-slate-700' iconClassName='dark:bling-dark-bg-2 border bling-light-border dark:bling-dark-border bling-light-bg-2' titleClassName='bling-light-text dark:text-white' descriptionClassName='text-xs text-nowrap bling-light-text dark:bling-dark-text' title='Nuevo elemento' description='Creando nuevo elemento' />
            </div>
            <div className={classNames('w-full', 'lg:w-fit', 'dark:bling-dark-bg-2', 'border', 'bling-light-border', 'dark:bling-dark-border', 'bling-light-bg-2', 'shadow-sm', 'flex-nowrap', 'rounded-brand', 'gap-2', 'h-auto', 'p-2', 'flex', 'flex-row', 'justify-end', 'items-left')}>
              <div className={classNames('w-fit', 'h-auto', 'p-2', 'px-4', 'lg:flex-nowrap', 'flex', 'flex-row', 'justify-center', 'dark:bling-dark', 'bling-light', 'rounded-brand', 'gap-2', 'font-bold', 'items-center', 'text-sm', 'font-bold')}>
                <FaBoxesStacked />
                <span className='text-nowrap bling-light-text dark:bling-dark-text'>Stock</span> <span className='text-blue-500 text-nowrap'>0</span>
                <span>
                  <FaInfoCircle />
                </span>
              </div>
              <div className={classNames('w-fit', 'h-auto', 'p-2', 'px-4', 'dark:bling-dark', 'bling-light-text', 'dark:bling-dark-text', 'lg:flex-nowrap', 'flex', 'flex-row', 'justify-center', 'bling-light', 'rounded-brand', 'gap-2', 'font-bold', 'items-center', 'text-sm', 'font-bold')}>
                <FaMoneyBillTrendUp />
                <span className='text-nowrap'>Ganancia estimada</span> <span className='text-green-500 text-nowrap'>$ 0.00</span>
                <span>
                  <FaInfoCircle />
                </span>
              </div>
            </div>
            <UserButton />
          </div>
          {/* //* INICIO > VIEWS FORMS ELEMENTOS > PRODUCTOS | SERVICIOS | VEHICULOS | INMUEBLES  */}
          <div className='w-full  h-auto  !bg-transparent px-4 overflow-x-auto  flex-grow flex-wrap flex rounded-brand flex-col   '>
            <Step as='div' value={0} className='w-full h-auto flex justify-center items-center flex-col py-5 '>
              <ProductCategory />
            </Step>
            <Step as='div' value={1} className='w-full h-auto flex justify-center items-center flex-col py-5 '>
              <ProductIdentity />
            </Step>
            <Step as='div' value={2} className='w-full h-auto flex justify-center items-center flex-col py-5 '>
              <ProductVariantsV2 />
            </Step>
            <Step as='div' value={3} className='w-full h-auto flex justify-center items-center flex-col py-5 '>
              <ProductAttribute />
            </Step>
            <Step as='div' value={4} className='w-full h-auto flex justify-center items-center flex-col py-5 '>
              
              <ProductShipping />
            </Step>
            <Step as='div' value={5} className='w-full h-auto flex justify-center items-center flex-col py-5 '>
              
              <ProductPayment />
            </Step>
            <Step as='div' value={6} className='w-full h-auto flex justify-center items-center flex-col py-5 '>
              
              <ProductSuccess />
            </Step>
          </div>
          {/* //* FIN > VIEWS FORMS ELEMENTOS > PRODUCTOS | SERVICIOS | VEHICULOS | INMUEBLES  */}
          {stepper.step > 0 && (
            <div className={classNames('w-auto', 'h-auto', 'p-5', 'lg:flex-nowrap', 'flex', 'flex-row', 'gap-2', 'justify-center', 'items-center', 'font-bold')}>
              <Button icon={<Icon name={ArrowLeft} size={20} />} text='Anterior' onClick={() => stepper.previousStep()} className={classNames('w-36', 'h-10', 'bling-btn-primary', 'dark:bling-btn-primary-dark', 'text-sm')}/>
              <div
                className={classNames(
                  'w-fit',
                  'h-10',
                  'bg-slate-100',
                  'transition-all',
                  'hover:scale-110',
                  'px-2',
                  'flex-row',
                  'flex',
                  'items-center',
                  'justify-center',
                  'hover:bg-white',
                  'rounded-brand',
                  'cursor-pointer',
                  'text-slate-700',
                  'text-sm'
                )}
              >
                <span className='self-center w-fit px-2 text-nowrap'>
                  {stepper.step + 1} de {stepper.registeredSteps.length}
                </span>
              </div>
              <Button iconRight={<Icon name={ArrowRight} size={20} />} text='Siguiente' onClick={() => stepper.nextStep()} className={classNames('w-36', 'h-10', 'bling-btn-primary', 'dark:bling-btn-primary-dark', 'text-sm')}/>
             
            </div>
          )}
        </div>
      </div>
    </>
  );
});

export default  CreateProduct ;