'use client';
import { useMemo } from 'react';
import classNames from 'classnames';
import { StringUtils } from '@/utils';
import { ColorAttributeConstants } from '@/constants';
import { ButtonColor, Separator } from '@/components/atoms';
import { IProductVariant, IProductVariantAttribute } from '@/entities/ProductVariant';
import { useSingleProduct } from '../../SingleProduct.context';
import { IProduct } from '@/entities/Product';


interface IColorsProps {
  separator?: boolean;
  onSelect: (attribute: IProductVariantAttribute, productVariant: IProductVariant) => void;
}

interface IRenderColor {
  color: string, value: string,
  variantAttribute: IProductVariantAttribute, variant: IProductVariant
}

const Colors: React.FC<IColorsProps> = ({ separator = true, onSelect }) => {

  const { productDisplay, selectProductVariantAttribute, isActiveAttribute, isCompatibleVariant } = useSingleProduct();

  const product = productDisplay?.product as IProduct;

  const renderColors = useMemo(() => {
    const colorsHash: Record<string, IRenderColor> = {};
    const _tmpColors = product.variants.map((variant) => {
      // * TODO: Improvement - Add a unique uuid or identifier (not autoincremnt to prevent bugs on different environments) in the <attribute> table.
      // * Start using it here to filter the attributes 
      const variantAttribute = variant.variantAttributes
        ?.find((variantAttribute) => StringUtils.lower(variantAttribute.attribute?.name) === 'color');
      const variantColor = variantAttribute?.attributeValue;

      if (!variantColor) return;
      return { color: variantColor, value: ColorAttributeConstants.getColor(variantColor), variantAttribute, variant };
    }).filter((val) => !!val);

    _tmpColors.forEach(item => colorsHash[item.color] = item);

    return Object.values(colorsHash);
  }, [product]);


  return (
    <>
      {
        separator && renderColors.length > 0 && (
          <Separator textStart='Colores' size='my-3' className='text-xs text-slate-400 ' />
        )
      }
      {renderColors.map((item) => {
        return (
          <ButtonColor
            className={classNames('border-2 border-transparent', 'disabled:!opacity-90',
              '!transition-none',
              {
                '!border-2 !border-slate-900': isActiveAttribute(item.variantAttribute),
                '!border !border-dashed !border-slate-900': !isCompatibleVariant(item.variant)
              })}
            key={item.color}
            onClick={() => selectProductVariantAttribute({
              variant: item.variant,
              variantAttribute: item.variantAttribute
            })}
          
            color={item.value}
            loading={false}
          />
        );
      })}
    </>
  );

};

export { Colors };