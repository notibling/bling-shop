import React, { useCallback, useMemo } from 'react';
import { FaPlus, FaTimes, FaUpload } from 'react-icons/fa';
import _ from 'lodash';
import classNames from 'classnames';
import { Button, Input } from '@/components/atoms';
import * as filesOperations from '@/contexts/GlobalState/files/operations';
import { VariationsSelections, type ISelection } from './VariationsSelections';
import { IProductVariant } from '@/entities/ProductVariant';
import { IAttribute } from '@/entities/Attribute';
import { PartialIProductVariant } from './types';
import { getStaticFileUrl } from '@/utils/statics';
import Image from 'next/image';

interface ISingleProductVariantProps {
  attributes: IAttribute[];
  productVariant: PartialIProductVariant;
  control: boolean;
  onChange: (productVariant: PartialIProductVariant) => void;
  setProductVariants: React.Dispatch<React.SetStateAction<PartialIProductVariant[]>>;
  addVariant: () => void;
  dropVariant: () => void;
}

export const SingleProductVariant: React.FC<ISingleProductVariantProps> = ({
  attributes,
  productVariant,
  onChange,
  control,
  dropVariant,
  setProductVariants
}) => {
  // Manejo del cambio de atributo de variante
  const handleVariantAttributeChange = useCallback(
    _.throttle((index: number, { attributeId, attributeValue }: ISelection) => {
      const updatedVariant = { ...productVariant };
      updatedVariant.variantAttributes = updatedVariant.variantAttributes ?? [];

      updatedVariant.variantAttributes[index] = {
        ...updatedVariant.variantAttributes[index],
        attributeId: attributeId || updatedVariant.variantAttributes[index]?.attributeId,
        attributeValue: attributeValue || updatedVariant.variantAttributes[index]?.attributeValue,
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
        id: 0,
        variantId: productVariant.id ?? 0,
        attribute: attributes.find((attr) => attr.id === attributeId)
      };
      onChange(updatedVariant);
    }, 100),
    [productVariant, attributes, onChange]
  );

  // Manejo de la subida de imágenes
  const handleUploadImage = useCallback(async(event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const { success, files: [uploadedFile] } = await filesOperations.uploadFile(file);

      if (success && uploadedFile) {
        onChange({ ...productVariant, images: [uploadedFile] });
      } else {
        // TODO: Manejar el error de la subida
      }
    }
  }, [onChange, productVariant]);

  // Actualiza una propiedad específica de la variante
  const setVariantProperty = useCallback(
    _.throttle((key: keyof IProductVariant, value: unknown) => {
      const updatedVariant = { ...productVariant, [key]: value };
      onChange(updatedVariant);
    }, 100),
    [productVariant, onChange]
  );

  // Elimina un atributo de variante
  const handleRemoveVariantAttribute = useCallback(
    _.throttle((index: number) => {
      setProductVariants((prev) => {
        return prev.map((variant) => ({
          ...variant,
          variantAttributes: variant.variantAttributes?.filter((_value, _index) => index !== _index)
        }));
      });
    }, 100),
    [setProductVariants]
  );

  // Añade un nuevo atributo de variante
  const addAttribute = useCallback(() => {
    setProductVariants((prev) => {
      return prev.map((variant) => ({
        ...variant,
        variantAttributes: [
          ...(variant.variantAttributes ?? []),
          {
            attributeId: 0,
            attributeValue: '',
            createdAt: new Date(),
            deletedAt: null,
            updatedAt: null,
            id: 0,
            variantId: variant.id ?? 0
          }
        ]
      }));
    });
  }, [setProductVariants]);

  const variantAttributes = useMemo(() => productVariant?.variantAttributes ?? [], [productVariant]);

  return (
    <div className={classNames('w-auto h-auto mb-3 gap-1 bling-light dark:bling-dark-bg-2 p-1 rounded-brand flex flex-col lg:flex-row justify-between')}>
      {variantAttributes.map((attribute, index) => (
        <VariationsSelections
          control={control}
          key={`variant-attribute-${attribute?.id}-${index}`}
          attributes={attributes}
          attributeId={attribute?.attributeId ?? 0}
          attributeValue={attribute?.attributeValue ?? ''}
          onChange={(selection) => handleVariantAttributeChange(index, selection)}
          removeVariantAttribute={() => handleRemoveVariantAttribute(index)}
        />
      ))}
      {variantAttributes.length < 3 && (
        <Button className='btn lg:w-[50px] h-auto text-slate-700 bling-light dark:bling-dark clickable rounded-md flex lg:order-2 order-8 flex-row gap-2 lg:gap-0 lg:p-0 p-3 text-md items-center justify-center' onClick={addAttribute}>
          <FaPlus /> <span className='flex text-sm lg:hidden'>Añadir Variación</span>
        </Button>
      )}
      <div className='flex flex-row order-3 w-full h-auto gap-1 p-0 lg:w-auto lg:order-3'>
        <div className='w-[85px] bg-blue-400 aspect-square gap-1 h-auto flex flex-row p-0'>
          <label className='w-full lg:w-[85px] aspect-square h-auto flex flex-row items-center justify-center hover:bg-slate-900 hover:text-white cursor-pointer transition-all duration-75 text-slate-700 bling-light dark:bling-dark rounded-md'>
            <input type='file' className='sr-only' onChange={handleUploadImage} />
            <div className='flex flex-col items-center justify-center w-full rounded-md aspect-square'>
              {productVariant?.images?.[0] ? (
                <Image unoptimized src={getStaticFileUrl(productVariant.images[0] ?? '')} alt='Imagen del Producto' width={100} height={100} className='object-cover w-full h-full rounded-md' />
              ) : (
                <>
                  <FaUpload className='my-2' />
                  <span className='text-xs text-center'>Subir Imagen</span>
                </>
              )}
            </div>
          </label>
        </div>
        <div className='flex flex-col w-3/3 lg:w-[150px] gap-1'>
          <Input
            type='text'
            placeholder='Stock'
            value={productVariant?.stock ?? ''}
            onChange={(e) => setVariantProperty('stock', e.target.value)}
            className='w-full text-center rounded-md !h-10 bling-btn-secondary dark:bling-btn-primary-dark'
          />
          <Input
            type='text'
            placeholder='SKU'
            value={productVariant?.skuSuffix ?? ''}
            onChange={(e) => setVariantProperty('skuSuffix', e.target.value)}
            className='w-full text-center rounded-md !h-10 bling-btn-secondary dark:bling-btn-primary-dark'
          />
          <Input
            type='text'
            placeholder='Precio'
            value={productVariant?.price ?? ''}
            onChange={(e) => setVariantProperty('price', e.target.value)}
            className='w-full text-center rounded-md !h-10 bling-btn-secondary dark:bling-btn-primary-dark'
          />
        </div>
      </div>
      <div className='w-full flex-row lg:w-[40px] gap-1 flex lg:flex-col'>
        <Button
          icon={<FaTimes />}
          text='Borrar Variante'
          showText={false}
          className='flex items-center justify-center w-1/2 gap-2 p-3 rounded-md lg:w-full h-1/2 bling-light dark:bling-dark clickable focus:bg-red-500 focus:text-white'
          onClick={dropVariant}
        />
      </div>
    </div>
  );
};
