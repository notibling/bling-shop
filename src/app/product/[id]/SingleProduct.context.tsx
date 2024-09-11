'use client'
import { createContext, useContext, useEffect, useState } from 'react';

import  * as categoryOperations from '@/contexts/GlobalState/product/categoryOperations';

import { usePromise, usePromiseState } from '@/hooks';

import { IProductDisplay } from '@/entities/ProductDisplay';
import { IProductVariant, IProductVariantAttribute } from '@/entities/ProductVariant';

export interface ISingleProductContext {
  productDisplay: IProductDisplay;
  productVariantFilters: Record<IProductVariantAttribute['attributeId'], IProductVariantAttribute>;
  compatibleVariants: IProductVariant[]; // * Filters comptabile variants

  getCompatibleVariants: (product: IProductDisplay) => IProductVariant[];
  isActiveAttribute: (productVariantAttribute: IProductVariantAttribute) => boolean;
  isCompatibleVariant: (productVariant: IProductVariant) => boolean;
  selectProductVariantAttribute: (arg: { variant?: IProductVariant; variantAttribute: IProductVariantAttribute }) => void;


  setProductVariantFilters: React.Dispatch<React.SetStateAction<
    Record<IProductVariantAttribute['attributeId'], IProductVariantAttribute>>
  >;
}

export interface ISingleProductProps {
  children: React.ReactNode;
  productDisplay: IProductDisplay;
}


const SingleProductContext = createContext<ISingleProductContext>({
  productDisplay: {} as IProductDisplay,
  productVariantFilters: {},
  compatibleVariants: [],
  getCompatibleVariants: () => [],
  isActiveAttribute: () => false,
  isCompatibleVariant: () => false,
  selectProductVariantAttribute: () => { },
  setProductVariantFilters: () => { },
});


const SingleProductProvider: React.FC<ISingleProductProps> = ({ children, productDisplay }) => {

  // const [currentVariant, setCurrentVariant] = useState<IProductVariant>();


  const [productVariantFilters, setProductVariantFilters] = useState<Record<IProductVariantAttribute['attributeId'], IProductVariantAttribute>>({});

  const getCompatibleVariants = (productDisplay: IProductDisplay) => {

    const productVariants = productDisplay?.product?.variants ?? [];

    const variantAttributes = Object.values(productVariantFilters); // * A single attribute type per value (so, it cannot be medium size and large at the same time)

    if (!variantAttributes.length) return productVariants;

    return productVariants.filter((variant) => {
      const productVariantAttributes = variant.variantAttributes ?? [];
      // * Check if the variant has all the required attributes
      const fillRequirements = variantAttributes.some((attr) => {
        const productVariantAttribute = productVariantAttributes.find(el => el.attributeId === attr.attributeId && el.attributeValue === attr.attributeValue);
        return productVariantAttribute
      });
      return fillRequirements;
    });
  }

  const isActiveAttribute = (attribute: IProductVariantAttribute) => attribute.attributeId in productVariantFilters;
  const compatibleVariants = getCompatibleVariants(productDisplay);

  const isCompatibleVariant = (variant: IProductVariant) => {

    return compatibleVariants.some(i => i.id === variant.id)
  }

  const selectProductVariantAttribute: ISingleProductContext['selectProductVariantAttribute'] = ({ variant, variantAttribute }) => {
    const nonFilters = !Object.values(productVariantFilters).length;
    if (variant && (!isCompatibleVariant(variant) || nonFilters)) {
      const attrs = (variant.variantAttributes ?? []).reduce((acc, crr) => ({
        ...acc,
        [crr.attributeId]: crr
      }), {})
      setProductVariantFilters({
        ...attrs,
        [variantAttribute.attributeId]: variantAttribute
      });
      return;
    }

    setProductVariantFilters(prev => ({
      ...prev,
      [variantAttribute.attributeId]: variantAttribute,
    }))

  }

  useEffect(() => {
    if(productDisplay.entity !== 'product') return;
    const variants = productDisplay.product?.variants?? [];
    const mainVariant = variants.find(variant => variant.main);
    if(!mainVariant) return;

    const attrs = (mainVariant.variantAttributes ?? []).reduce((acc, crr) => ({
      ...acc,
      [crr.attributeId]: crr
    }), {})
    console.log(attrs);
    setProductVariantFilters(attrs);
  }, [productDisplay])
  return (
    <SingleProductContext.Provider value={{
      getCompatibleVariants,
      setProductVariantFilters, productVariantFilters,
      selectProductVariantAttribute, isActiveAttribute,
      isCompatibleVariant, compatibleVariants, productDisplay
    }}>
      {children}
    </SingleProductContext.Provider>
  )
}


function useSingleProduct() {
  return useContext(SingleProductContext);
}


export { SingleProductProvider, useSingleProduct };