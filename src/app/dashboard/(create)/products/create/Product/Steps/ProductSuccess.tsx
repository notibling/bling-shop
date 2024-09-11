import React, { useEffect, useRef } from 'react';
import { usePromise } from '@/hooks';
import * as productOperations from '@/contexts/GlobalState/product/operations';
import classNames from 'classnames';
import { Button, Chip, Icon, Separator, Title } from '@/components/atoms';
import { useStepper } from '@/components/organisms/';
import { FaBox, FaCheck, FaEye, FaPlus } from 'react-icons/fa';
import { ICreateProductStepperState } from '../..';
import { AddSquare, Box, CheckCircle, Eye, PlusMinus } from '@/icons/tsx';



interface ProductSuccessProps { }

const ProductSuccess: React.FC<ProductSuccessProps> = () => {
    const stepper = useStepper<ICreateProductStepperState>();
    const savedRef = useRef<boolean>(false);
    const { perform, loading, result } =
        usePromise((data: ICreateProductStepperState) => productOperations.createProduct(data))

    const state = stepper.state;

    const variantsText = state?.variants.map((variant,index) => {
        const values = variant.variantAttributes?.map((attr) => attr.attributeValue).join(' / ');
        return (
            <p key={`variant_${index}`}>({values} = 1 x ${variant.price})</p>
        )
    })


    useEffect(() => {
        if (!loading && !result && stepper.state && !savedRef.current) {
            savedRef.current = true;
            perform(stepper.state);
        }
    }, [stepper])

    return (
        <>

<div className="w-full h-auto  p-4 flex items-center justify-center flex-col gap-3">
     <Title icon={<Icon name={Eye} size={20} color="#ffcc00" />}  title='Validación de Producto' level='p' className={'bling-light dark:bling-dark rounded-md '} iconClassName='! !pr-0' titleClassName={'pr-3'} />
      </div>

          
      <div className={classNames('w-full', 'lg:w-1/2', 'rounded-brand', 'p-5','bling-light','dark:bling-dark-bg-2', 'overflow-hidden', 'border','bling-light-border','dark:bling-dark-border')}>
              
                <div className="w-full h-auto  flex-row flex justify-between">
                    <div className='w-1/3 py-5 h-auto flex flex-col justify-center items-center '><span className="!bg-transparent bg-opacity-40 border border-green-400 text-green-400 w-fit text-4xl rounded-full p-3 uppercase"><FaCheck /></span></div>
                    <div className='w-2/3 py-5 h-auto flex gap-1 flex-col justify-center bling-text-light dark:text-white text-3xl'>Producto creado <span className="!bg-transparent bg-opacity-40 border border-green-400 text-green-400 w-fit text-2xl rounded-md px-3 uppercase">correctamente</span></div></div>
                <div className="w-full h-auto  flex-col flex justify-between">
                    <Separator textMiddle="Resumen" size="my-3" className="text-slate-500 text-xs border-slate-500" />
                    
                    <div className="w-full h-auto table-auto border-collapse">
    <div className='w-full h-auto '>
            <div className='grid grid-cols-8 border justify-center items-center p-3 bling-light-border dark:bling-dark-border'>
            <div className="col-span-2 text-xs py-3 font-bold text-nowrap">
                <Chip className="text-wrap" status="info" textClassName="" text="Título"/>
            </div>
            <div className="col-span-6 text-xs py-3 bling-light-text dark:bling-dark-text pl-2">{state?.title}</div>
            </div>
            <div className='grid grid-cols-8 border justify-center items-center p-3 bling-light-border dark:bling-dark-border'>
            <div className="col-span-2 text-xs py-3 font-bold text-nowrap">
                <Chip className="text-wrap" status="info" textClassName="" text="Descripción"/>
            </div>
            <div className="col-span-6 text-xs py-3 bling-light-text dark:bling-dark-text pl-2">{state?.description}</div>
            </div>

            <div className='grid grid-cols-8 border justify-center items-center p-3 bling-light-border dark:bling-dark-border'>
            <div className="col-span-2 text-xs py-3 font-bold text-nowrap">
            <Chip className="text-wrap" status="info" textClassName="" text="SKU"/>
            </div>
            <div className="col-span-2 text-xs py-3 bling-light-text dark:bling-dark-text pl-2">{state?.sku}</div>
            
            <div className="col-span-2 text-xs py-3 font-bold text-nowrap">
            <Chip className="text-wrap" status="info" textClassName="" text="UPC"/>
            </div>
            <div className="col-span-2 text-xs py-3 bling-light-text dark:bling-dark-text pl-2">{state?.upc}</div>
            
            </div>


            <div className='grid grid-cols-8 border justify-center items-center p-3 bling-light-border dark:bling-dark-border'>
            <div className="col-span-2 text-xs py-3 font-bold text-nowrap">
            <Chip className="text-wrap" status="info" textClassName="" text="Precio Antes"/>
            </div>
            <div className="col-span-2 text-xs py-3 bling-light-text dark:bling-dark-text pl-2">{state?.priceBefore}</div>
            
            <div className="col-span-2 text-xs py-3 font-bold text-nowrap">
            <Chip className="text-wrap" status="info" textClassName="" text="Precio Ahora"/>
            </div>
            <div className="col-span-2 text-xs py-3 bling-light-text dark:bling-dark-text pl-2">{state?.priceNow}</div>
            </div>

           

            <div className='grid grid-cols-8 border justify-center items-center p-3 bling-light-border dark:bling-dark-border'>
            <div className="col-span-2 text-xs py-3 font-bold text-nowrap">
                <Chip className="text-wrap" status="info" textClassName="" text="Variantes"/>
            </div>
            <div className="col-span-6 text-xs py-3 bling-light-text dark:bling-dark-text pl-2">{variantsText}</div>
            </div>
       
            <div className='grid grid-cols-8 border justify-center items-center p-3 bling-light-border dark:bling-dark-border'>
            <div className="col-span-2 text-xs py-3 font-bold text-nowrap">
                <Chip className="text-wrap" status="info" textClassName="" text="Entrega"/>
            </div>
            <div className="col-span-6 text-xs py-3 bling-light-text dark:bling-dark-text pl-2">Retiro Pickup | Entrega a Domicilio | Retiro en tienda</div>
            </div>
            <div className='grid grid-cols-8 border justify-center items-center p-3 bling-light-border dark:bling-dark-border'>
            <div className="col-span-2 text-xs py-3 font-bold text-nowrap">
                <Chip className="text-wrap" status="info" textClassName="" text="Envío"/>
            </div>
            <div className="col-span-6 text-xs py-3 bling-light-text dark:bling-dark-text pl-2">Todo el país: $0.00 | Artigas: $0.00 | Rivera Gral: $0.00 | Canelones: $0.00 | Maldonado: $0.00 | San Juan: $0.00</div>
            </div>
            <div className='grid grid-cols-8 border justify-center items-center p-3 bling-light-border dark:bling-dark-border'>
            <div className="col-span-2 text-xs py-3 font-bold text-nowrap">
                <Chip className="text-wrap" status="info" textClassName="" text="Método de Pago"/>
            </div>
            <div className="col-span-6 text-xs py-3 bling-light-text dark:bling-dark-text pl-2">Todas las Tarjetas &gt; Cuotas 3 / 6 / 9 / 12</div>
            </div>

            <div className='grid grid-cols-8 border justify-center items-center p-3 bling-light-border dark:bling-dark-border'>
            <div className="col-span-2 text-xs py-3 font-bold text-nowrap">
                <Chip className="text-wrap" status="info" textClassName="" text="Garantía"/>
            </div>
            <div className="col-span-6 text-xs py-3 bling-light-text dark:bling-dark-text pl-2">1 Año | De Fábrica</div>
            </div>



           
           
            </div>

     
        
    </div>

             

                </div>
            </div>
            <div className={classNames('w-full', 'lg:w-1/2', 'mt-3', 'bling-light','bling-light-border','dark:bling-dark-bg-2','border', 'dark:bling-dark-border',  'rounded-brand', 'overflow-hidden','flex', 'flex-row','gap-2', 'p-3', 'justfy-center', 'items-center')}>
            <Button icon={<Icon name={Eye} size={20} />} text="Vista previa" className='py-6 w-1/2 bling-btn-primary border bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark '/>
                <Button icon={<Icon name={CheckCircle} size={20} />} text="Finalizar creación" className='py-6 w-1/2 border bling-light-border dark:bling-dark-border bling-btn-primary dark:bling-btn-primary-dark'/>
                </div>
        </>
    );
};

export { ProductSuccess };


