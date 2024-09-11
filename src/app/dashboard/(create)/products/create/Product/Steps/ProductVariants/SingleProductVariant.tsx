import React from 'react';
import { FaPlus,  FaTimes, FaUpload } from 'react-icons/fa';
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

export const SingleProductVariant: React.FC<ISingleProductVariantProps> = ({ attributes, productVariant, onChange, control, dropVariant, setProductVariants }) => {
  const handleVariantAttributeChange = _.throttle((index: number, { attributeId, attributeValue }: ISelection) => {
    const _productVariant = _.cloneDeep(productVariant);
    _productVariant.variantAttributes ??= [];

    _productVariant.variantAttributes[index] = {
      ...(_productVariant.variantAttributes[index] ?? {}),
      ...(attributeId ? { attributeId } : {}),
      ...(attributeValue ? { attributeValue } : {}),
      createdAt: new Date(),
      deletedAt: null,
      updatedAt: null,
      id: 0,
      variantId: productVariant.id ?? 0,
      attribute: attributes.find((attr) => attr.id === attributeId),
    };
    onChange(_productVariant);
  }, 100);


  
  const handleUploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const $file = event.target.files?.[0];
    if ($file) {
      const {
        success,
        files: [uploadedFile],
      } = await filesOperations.uploadFile($file);

      if (!success || !uploadedFile) {
        // * TODO: handle error
        return;
      }

      onChange({ ...productVariant, images: [uploadedFile] });
    }
  };

  const setVariantProperty = _.throttle((key: keyof IProductVariant, value: unknown) => {
    const _productVariant = _.cloneDeep(productVariant);

    onChange({ ..._productVariant, [key]: value });
  }, 100);

  const handleRemoveVariantAttribute = _.throttle((index: number) => {
    setProductVariants((prev) => {
      const variants = _.cloneDeep(prev);
      variants.forEach((variant) => {
        variant.variantAttributes ??= [];

        variant.variantAttributes = variant.variantAttributes.filter((_value, _index) => index != _index);
      });

      return variants;
    });
  }, 100);

  const addAttribute = () => {
    setProductVariants((prev) => {
      const variants = prev.map((_variant) => ({
        ..._variant,
        variantAttributes: [
          ...(_variant.variantAttributes ?? []),
          {
            attributeId: 0,
            attributeValue: '',
            createdAt: new Date(),
            deletedAt: null,
            updatedAt: null,
            id: 0,
            variantId: _variant.id ?? 0,
          },
        ],
      }));

      return _.cloneDeep(variants);
    });
  };

  const variantAttributes = productVariant?.variantAttributes ?? [];

  return (
    <div className={classNames('w-auto  h-auto  mb-3 gap-1  bling-light dark:bling-dark-bg-2  p-1 rounded-brand flex flex-col lg:flex-row justify-between order-2')}>
      {variantAttributes.map((_attribute, index) => (
        <VariationsSelections
          control={control}
          key={`variant-attribute-${_attribute?.id}-${index}`}
          attributes={attributes}
          attributeId={_attribute?.attributeId ?? 0}
          attributeValue={_attribute?.attributeValue ?? ''}
          onChange={(selection) => handleVariantAttributeChange(index, selection)}
          removeVariantAttribute={() => handleRemoveVariantAttribute(index)}
        />
      ))}
      {variantAttributes.length < 3 && (
        <Button className="btn lg:w-[50px] h-auto text-slate-700 bling-light dark:bling-dark clickable rounded-md flex lg:order-2 order-8  flex-row gap-2 lg:gap-0 lg:p-0 p-3 text-md items-center justify-center" onClick={addAttribute}>
          <FaPlus /> <span className="flex text-sm lg:hidden">Añadir Variación</span>
        </Button>
      )}
      <div className="flex flex-row order-3 w-full h-auto gap-1 p-0 lg:w-auto lg:order-3">
        <div className="w-[85px] bg-blue-400 aspect-square gap-1 h-auto flex flex-row p-0">
          <label className="w-full lg:w-[85px] aspect-square h-auto flex flex-row items-center justify-center hover:bg-slate-900 hover:text-white hover:cursor-pointer transition-all duration-75 ease-in-out text-slate-700  bling-light dark:bling-dark clickable rounded-md  ">
            <input type="file" className="sr-only" onChange={handleUploadImage} />
            <div className="flex flex-col items-center justify-center w-full p-0 rounded-md aspect-square">
              {productVariant?.images?.[0] ? (
                <Image unoptimized src={getStaticFileUrl(productVariant?.images?.[0])} alt="Product Image" width={100} height={100} className="object-cover w-full h-full rounded-md " />
              ) : (
                <>
                  <FaUpload className="my-2" />
                  <span className="text-xs leading-3 text-center">
                    Subir
                    <br />
                    Imagen
                  </span>
                </>
              )}
            </div>
          </label>
        </div>
        <div className="w-3/3 lg:w-[150px] gap-1 h-auto flex flex-col p-0 order-3 flex-wrap ">
          <div className="flex flex-row items-center justify-center w-full h-auto gap-1 text-sm text-center rounded-md clickable text-slate-700">
            <Input type="text" placeholder="Stock" value={productVariant?.stock ?? ''} onChange={(e) => setVariantProperty('stock', e.target.value)} className="flex-row-reverse justify-between w-full text-center !h-10 rounded-md btn-sm bling-btn-secondary dark:bling-btn-primary-dark " />
            <Input type="text" placeholder="SKU" value={productVariant?.skuSuffix ?? ''} onChange={(e) => setVariantProperty('skuSuffix', e.target.value)} className="flex-row-reverse justify-between w-full text-center !h-10 rounded-md btn-sm bling-btn-secondary dark:bling-btn-primary-dark " />
           
          </div>
          <div className="flex flex-row items-center justify-center w-full h-auto text-sm text-center rounded-md gap-x-1 clickable text-slate-700">
            <Input type="text" placeholder="Precio" value={productVariant?.price ?? ''} onChange={(e) => setVariantProperty('price', e.target.value)} className="flex-row-reverse justify-between w-full !h-10 text-center rounded-md btn-sm bling-btn-secondary dark:bling-btn-primary-dark " />
            <Input type="text" placeholder="Precio Oferta" value={productVariant?.price ?? ''} onChange={(e) => setVariantProperty('price', e.target.value)} className="flex-row-reverse justify-between w-full !h-10 text-center rounded-md btn-sm bling-btn-secondary dark:bling-btn-primary-dark " />
          </div>
        </div>
      </div>
      <div className="w-full flex-row lg:w-[40px] gap-1 h-auto flex lg:flex-col order-1 lg:order-4">
        <Button
          icon={<FaTimes />}
          text="Borrar Variante"
          showText={false}
          className="flex flex-row items-center justify-center order-1 w-1/2 gap-2 p-3 rounded-md lg:w-full h-1/2 bling-light dark:bling-dark clickable lg:order-4 focus:bg-red-500 focus:text-white focus:scale-95 text-slate-700 hover:bg-red-500 hover:text-white lg:gap-0 lg:p-0 text-md"
          onClick={() => dropVariant()}
        />
      </div>
    </div>
  );
};
