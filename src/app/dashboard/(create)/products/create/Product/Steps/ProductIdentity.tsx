import React, { useRef } from 'react';
import { FaTimes, FaImage  } from 'react-icons/fa';
import classNames from 'classnames';
import * as filesOperations from '@/contexts/GlobalState/files/operations';

import { Button, Icon, Input, Item, Title } from '@/components/atoms';
import { useStepper } from '@/components/organisms/Stepper';
import { getStaticFileUrl } from '@/utils/statics';
import { ALLOWED_IMAGE_FORMATS } from '@/constants/formats';
import { IFile } from '@/entities/File';
import { ICreateProductStepperState } from '../..';
import { Cardholder } from '@/icons/tsx';
import { Dropdown } from '@/components/organisms';

interface ProductIdentityProps { }

const ProductIdentity: React.FC<ProductIdentityProps> = ({ }) => {
  const stepper = useStepper<ICreateProductStepperState>();
  const imageInput = useRef<HTMLInputElement>(null);
  const _maxLength = 60;

  const handleChange = (field: keyof ICreateProductStepperState, value: string, maxLength: number = _maxLength) => {
    if (maxLength && value.length > maxLength) return;
    stepper.setState(prev => ({ ...prev, [field]: value }));
  };

  const handleUploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {

    console.log('hello world', event.target.files)

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      if (!ALLOWED_IMAGE_FORMATS.includes(file.type)) {
        alert('not allowed mime type');
      }

      const fileUpload = await filesOperations.uploadFile(file);

      stepper.setState(prev => ({
        ...prev,
        images: [...(prev?.images ?? []), ...fileUpload.files]
      }))

      if (imageInput.current) imageInput.current.value = '';
    }
  }

  const removeImage = (image: IFile) => {

    stepper.setState(prev => {
      const _images = prev?.images ?? []
      return { ...prev, images: _images.filter(img => img.id !== image.id) }
    })
  }

  const characterCount = stepper.state?.title?.length ?? 0;
  const badgeClass = characterCount < 40 ? 'badge-error' : characterCount < 50 ? 'badge-warning' : characterCount < 60 ? 'badge-success' : characterCount === 60 ? 'badge-info' : '';

  return (
    <>
    <div className="w-full h-auto  p-4 flex items-center justify-center flex-col gap-3">
     <Title icon={<Icon name={Cardholder} size={20} color="#ffcc00" />}  title='Identidad Técnica de Producto' level='p' className={'bling-light dark:bling-dark rounded-md '} iconClassName='!p-2 !pr-0' titleClassName={'pr-3'} />
      </div>
       
      <div className={classNames('w-full', 'lg:w-1/2', 'h-auto', 'flex', 'bling-light','dark:bling-dark-bg-5','p-2','rounded-md','items-center', 'justify-center', 'flex-col', 'gap-3')}>
        <Input
        
          right={
            <div className={classNames('flex', 'items-center')}>
              <span className={`badge  text-nowrap text-xs !text-white font-bold lg:text-md ${badgeClass}`}>{`${characterCount} / 60`}</span>
            </div>
          }
          type="text"
         
          placeholder="Titulo del producto"
          value={stepper.state?.title ?? ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('title', e.target.value, 60)}
          maxLength={60}
        />
        <div className=" w-full bling-light-bg-3 h-auto dark:bling-dark bling-light rounded-brand flex flex-col lg:flex-row items-center gap-2 p-2 !outline-none ">
          <div
            className={classNames(
              'aspect-square',
              'h-16',
              'dark:bling-dark-bg-3',
              'rounded-md',
              'p-1',
              'flex',
              'flex-row',
              'items-center',
              'justify-center',
              'select-none',
              'border',
              'dark:border-bling-dark-bg-5',
              'border-bling-light-bg-1',
              'bling-light-bg-2',
              'dark:bling-dark-text',
              'shadow-inner',
              'lg:p-2',
              'w-full',
              'lg:w-auto',
              'order-2',
              'lg:order-1',
              'lg:h-32'
            )}
          >

            <input type="file" multiple={false} accept={ALLOWED_IMAGE_FORMATS.join(',')} hidden ref={imageInput} onChange={handleUploadImage} />
            <Button
              onClick={() => imageInput.current?.click()}
              className={classNames(
                'w-full',
                'h-full',
                'aspect-square',
                'bling-light',
                'dark:bling-dark-bg-5',
                'rounded-md',
                'hover:bling-bright',
                'box-border',
                'transition-all',
                'duration-100',
                'dark:bling-dark-text',
                'hover:shadow-2xl',
                'lg:hover:scale-110',
                'hover:scale-100',
                'flex',
                'rounded-brand',
                'justify-center',
                'items-center',
                'text-4xl',
     
              )}
            >
              <span className="w-auto h-auto flex gap-2 flex-row justify-center items-center">
                {' '}
                <FaImage className={classNames('text-sm', 'lg:text-2xl')} /> <p className={classNames('block', 'lg:hidden', 'text-sm', 'font-bold')}>Carga imagenes aquí </p>
              </span>
            </Button>
          </div>
          <div className={classNames('w-full', 'order-1', 'lg:order-2','bling-light-bg-4', 'dark:border-bling-dark-bg-5','p-1', 'border', 'bling-light-border','lg:w-full', 'h-32', 'overflow-y-hidden','dark:bling-dark-bg-3', 'rounded-md', 'flex', 'flex-row')}>
            <div className={classNames('w-full', 'h-full', 'rounded-md','overflow-x-auto', 'overflow-y-hidden', 'gap-2', 'p-2',  'flex', 'flex-1', 'flex-row', 'justify-start', 'items-center')}>

              {stepper.state?.images?.map((image) => (
                <div key={`product_image-${image.id}`} className=" h-[100px] cursor-grab active:cursor-grabbing rounded-md select-none   dark:border-bling-dark-bg-5 border bling-light-border aspect-square hover:brightness-[105%] transition-all box-border relative">
                  <img alt="product image" src={getStaticFileUrl(image)} className={classNames('w-full', 'h-full', 'object-cover', 'rounded-md')} />
                  <Button icon={<FaTimes />} onClick={() => removeImage(image)} tabIndex={1} className="w-auto h-auto p-1 opacity-50 transition-all hover:scale-110 hover:opacity-100 text-sm rounded-full  hover:cursor-pointer bling-light dark:bling-dark absolute right-[10px] top-[10px]"/>
                </div>
              ))}

            </div>
          </div>

        </div>
        <div className=" w-full  h-auto rounded-brand grid grid-cols-2 items-center gap-2 !outline-none ">
          <div className=" col-span-1  ">
            <Input
              left={
                <div className={classNames('flex', 'items-center')}>
                  <span className={`rounded-full px-2 p-1 bg-yellow-500  text-nowrap text-xs overflow-hidden !text-white font-bold lg:text-md  `}>SKU</span>
                </div>
              }
              placeholder="N° Gestión Interna"
              type="text"
              value={stepper.state?.sku ?? ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('sku', e.target.value, 120)}
              maxLength={120} />
          </div>
        
          <div className=" col-span-1">
            <Input
              left={
                <div className={classNames('flex', 'items-center')}>
                <span className={`rounded-full px-2 p-1  text-nowrap text-xs overflow-hidden !text-white font-bold lg:text-md bg-sky-500 `}>UPC</span>
              </div>
              }
             
              placeholder="Código Universal"
              type="text"
              value={stepper.state?.upc ?? ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('upc', e.target.value, 120)}
              maxLength={120} />

          </div>
      
        </div>
        <div className=" w-full  h-auto rounded-brand items-center gap-2 grid grid-cols-3 !outline-none ">
        <div className="w-full col-span-1">
            <Input
              left={
                <div className={classNames('flex', 'items-center')}>
                  <span className={`rounded-full px-2 p-1  text-nowrap text-xs overflow-hidden !text-white font-bold lg:text-md bg-orange-400 `}>Antes:</span>
                </div>
              }
              placeholder="N° Gestión Interna"
              type="text"
              value={stepper.state?.sku ?? ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('sku', e.target.value, 120)}
              maxLength={120} />
          </div>
          <div className="w-full col-span-1 ">
            <Input
              left={
                <div className={classNames('flex', 'items-center')}>
                  <span className={`rounded-full px-2 p-1  text-nowrap text-xs overflow-hidden !text-white font-bold lg:text-md bg-emerald-400 `}>Ahora:</span>
                </div>
              }
              placeholder="N° Gestión Interna"
              type="text"
              value={stepper.state?.sku ?? ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('sku', e.target.value, 120)}
              maxLength={120} />
          </div>
        <div className="w-full col-span-1">
            <Dropdown trigger={<Button text="Divisa"  className="bling-btn-primary border bling-light-border dark:bling-dark-border dark:bling-btn-primary-dark w-full h-12" />} bodyClassName='min-w-[200px] p-1' >
             <Item content="text" text="[UYU] $ Peso Uruguay"/>
             <Item content="text" text="[ARG] $ Peso Argentino"/>
             <Item content="text" text="[USD] U$$ Dolar EEUU"/>
      
         
            </Dropdown>
          </div>
        </div>
        <div className=" w-full  h-auto rounded-brand flex flex-col lg:flex-row items-center gap-2 !outline-none ">
          <textarea
            className="textarea w-full h-[180px] lg:h-[140px] leading-5 !outline-none resize-none bling-light-bg-3 dark:bling-dark"
            value={stepper.state?.description ?? ''}
            onChange={(e) => handleChange('description', e.target.value, 500)}
            maxLength={500}
            placeholder="Descripción Breve / 500 Caracteres Máx."
          ></textarea>
        </div>
      </div>
    </>
  );
};

export { ProductIdentity };
