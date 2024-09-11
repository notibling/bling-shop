import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { FaPlus, FaShapes } from 'react-icons/fa';
import _ from 'lodash';
import * as productOperations from '@/contexts/GlobalState/product/operations';
import { usePromiseState } from '@/hooks';
import { Button } from '@/components/atoms';
import { SingleProductVariant } from './SingleProductVariant';
import { PartialIProductVariant } from './types';
import { useStepper } from '@/components/organisms/Stepper';
import { ICreateProductStepperState } from '../../../types';

const MAX_PRODUCT_VARIANTS = 5;

const ProductVariants: React.FC = () => {
  const stepper = useStepper<ICreateProductStepperState>();
  const [productVariants, setProductVariants] = useState<PartialIProductVariant[]>([]);
  const { result: availableAttributes } = usePromiseState(() => productOperations.fetchAttributes('product_variant'));

  const handleSetProductVariants = (value: PartialIProductVariant[]) => {
    setProductVariants(value);
    stepper.setState((prev) => ({ ...prev, variants: value }));
  };

  const addVariant = () => {
    setProductVariants((prev) => [
      ...prev,
      {
        id: Math.floor(Date.now() * Math.random()),
        price: undefined,
        stock: undefined,
        skuSuffix: '',
        images: [],

        variantAttributes: prev[0]?.variantAttributes
          ? prev[0].variantAttributes
          : [
              {
                id: Math.floor(Date.now() * Math.random()),
                attributeId: Math.floor(Date.now() * Math.random()),
                attributeValue: undefined,
              },
            ],
        productId: 0,
      },
    ]);
  };

  const handleVariantChange = (index: number, productVariant: PartialIProductVariant) => {
    setProductVariants((prev) => {
      const updatedProductVariants = _.cloneDeep(prev);

      updatedProductVariants[index] = productVariant;

      const newAttributeIds = _.compact(productVariant.variantAttributes?.map((attr) => attr.attributeId));

      prev.forEach((variant) => {
        const attrs = variant.variantAttributes ?? [];

        attrs.forEach((attr, attrIndex) => {
          if (attr.attributeId !== newAttributeIds[attrIndex]) {
            attrs[attrIndex] = { ...attrs[attrIndex], attributeId: newAttributeIds[attrIndex], attributeValue: '' };
          }
        });
      });

      return updatedProductVariants;
    });
  };

  const handleRemoveVariant = (index: number) => {
    setProductVariants((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (productVariants.length > 0) {
      stepper.setState((prev) => ({ ...prev, variants: productVariants }));
    }
  }, [productVariants]);

  useEffect(() => {
    setProductVariants(stepper.state?.variants ?? []);
  }, []);
  return (
    <>
      <div className="w-full h-auto  px-4 flex items-center justify-center flex-col gap-2">
        <div
          className={classNames(
            'w-fit',
            'h-auto',
            'p-2',
            'px-4',
            'mb-5',
            'text-slate-100',
            'lg:flex-nowrap',
            'flex',
            'flex-row',
            'justify-center',
            'bg-slate-900',
            'border',
            'border-slate-800',
            'rounded-brand',
            'items-center',
            'text-sm',
            'gap-2',
            'font-bold'
          )}
        >
          <span className={classNames('text-primary-yellow')}>
            <FaShapes />
          </span>
          <span>Variaciones de producto:</span>
        </div>
      </div>

      <div className="w-full min-w-[50%] h-auto min-h-[60dvh] flex-wrap flex rounded-brand flex-col flex-grow justify-center items-center">
        <div className="w-auto  self-center justify-center flex flex-col rounded-brand">
          <div className="w-auto h-auto flex flex-col order-1 ">
            {productVariants.map((productVariant, index) => (
              <SingleProductVariant
                control={index === 0}
                attributes={availableAttributes?.attributes ?? []}
                key={`variant-${index}`}
                productVariant={productVariant}
                setProductVariants={setProductVariants}
                onChange={(_productVariant) => handleVariantChange(index, _productVariant)}
                addVariant={addVariant}
                dropVariant={() => handleRemoveVariant(index)}
              />
            ))}
            {productVariants.length < MAX_PRODUCT_VARIANTS && (
              <Button
                icon={<FaPlus />}
                text="Crear Variante"
                id={`CreateVariant${productVariants.length + 1}`}
                onClick={addVariant}
                className="w-auto h-[55px] outline-none mt-3 order-2 bling-light dark:bling-dark flex flex-row items-center rounded-brand justify-center text-sm flex-nowrap text-nowrap box-border"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductVariants };
