'use client';
import { useMemo } from 'react';
import classNames from 'classnames';

import { StringUtils } from '@/utils';

import { Button, Separator } from '@/components/atoms';

import { IProductVariant, IProductVariantAttribute } from '@/entities/ProductVariant';
import { useSingleProduct } from '../../SingleProduct.context';
import { IProduct } from '@/entities/Product';


interface ISizesProps {
  separator?: boolean;
  onSelect: (attribute: IProductVariantAttribute, productVariant: IProductVariant) => void;
}

interface ISizesHash {
  size: string, value: string,
  variantAttribute: IProductVariantAttribute, variant: IProductVariant
}


const Sizes: React.FC<ISizesProps> = ({ separator = true, onSelect }) => {

  const { productDisplay, selectProductVariantAttribute, isActiveAttribute, isCompatibleVariant } = useSingleProduct();

  const product = productDisplay?.product as IProduct;

  const renderSizes = useMemo(() => {
    const sizesHash: Record<string, ISizesHash> = {};
    const tmpSizes = product.variants.map((variant) => {
      // * TODO: Improvement - Add a unique uuid or identifier (not autoincremnt to prevent bugs on different environments) in the <attribute> table.
      // * Start using it here to filter the attributes 
      const variantAttribute = variant.variantAttributes
        ?.find((variantAttribute) => StringUtils.lower(variantAttribute.attribute?.name) === 'tamaño');
      const variantSize = variantAttribute?.attributeValue;

      if (!variantSize) return;
      return { size: variantSize, value: variantAttribute.attributeValue, variantAttribute, variant };
    }).filter((val) => !!val);

    tmpSizes.forEach(item => sizesHash[item.size] = item);


    return Object.values(sizesHash);
  }, [product]);


  return (
    <>
      {
        separator && renderSizes.length > 0 && (
          <Separator textStart='Tamaños' size='my-3' className='text-xs text-slate-400' />
        )
      }
      {renderSizes.map((item) => {
        return (
          <Button
            onClick={() => selectProductVariantAttribute({ variant: item.variant, variantAttribute: item.variantAttribute })}
            key={item.size}
            className={classNames(
              'border-2 border-transparent',
              'h-auto', 'gap-1', 'py-1',
              'text-sm', 'btn-sm', 'bling-light',
              'dark:bling-dark', 'clickable',
              '!transition-none',
              {
                'border-2 border-slate-900': isActiveAttribute(item.variantAttribute),
                'opacity-90 border border-dashed border-slate-900': !isCompatibleVariant(item.variant)
              }
            )}>
            {item.size}
          </Button >
        );
      })}
    </>
  );

};

export { Sizes };