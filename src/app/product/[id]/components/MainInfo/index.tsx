'use client'
import React, { useMemo, useState } from 'react';
import { Title, ToCopy, Section, AddToCartButton, Quantity } from '@/components/atoms';
import { ImageViewer } from '@/components/molecules';
import { IProduct} from '@/entities/ProductDisplay';
import { MoneyUtils } from '@/utils';
import { useCart } from '@/contexts/Cart';
import { Colors } from './Colors';
import { Sizes } from './Sizes';

import { useSingleProduct } from '../../SingleProduct.context';
import { Product } from '@/entities/Product';

interface IMainInfoProps {
  title: string;
  description: string;
  sizes: string[];
  price: number;
  priceBefore: number;
  stock: string | number;
  warranty: string;
  sku: string;
  upc: string;
  discount: number;
  images: string[];
}

const MainInfo: React.FC<IMainInfoProps> = ({
  title,
  description,
  warranty,
  sku,
  upc,
  discount,
  images,
}) => {
  const { addToCart } = useCart();
  const { getCompatibleVariants, productDisplay, productVariantFilters } = useSingleProduct();

  const [quantity, setQuantity] = useState<number>(1);

  const info = useMemo(() => {
    if (productDisplay.entity !== 'product') {
      return productDisplay.summary
    }

    const _product = new Product(productDisplay.product as IProduct)
    const _compatibleVariants = getCompatibleVariants(productDisplay);

    const [variant] = _compatibleVariants.length === 1 ? _compatibleVariants : [];

    return {
      ...productDisplay.summary,
      price: variant?.price || _product.getPrice() || 0,
      priceBefore: variant?.priceBefore || _product.getPriceBefore() || 0,
      stock: variant?.stock || _product.getStock() || 0,
    }
  }, [productDisplay, productVariantFilters])


  const { amount: formattedPrice, currencyDisplay: priceCurrencyDisplay } = MoneyUtils.format(info?.price || 0, 'UYU');
  const { amount: formattedPriceBefore, currencyDisplay: priceBeforeCurrencyDisplay } =
    MoneyUtils.format(info?.priceBefore || 0, 'UYU');

  const allowedVariants = getCompatibleVariants(productDisplay);

  function handleAddToCart() {
    const [currentVariant] = allowedVariants
    console.log({ currentVariant })
    addToCart({
      productDisplay: productDisplay,
      variant: currentVariant,
      quantity
    })
    setQuantity(1);
  }


  return (
    <>
      <Section classNameContainer="!justify-start !items-stretch">
        <div className="flex flex-col flex-wrap flex-grow order-1 w-full h-auto gap-2 overflow-hidden lg:w-1/2 ">
          <ImageViewer imageUrls={images} />
        </div>

        <div className="flex flex-row order-1 w-full h-auto gap-2 lg:w-1/2 ">
          <div className="flex flex-col items-stretch justify-between flex-grow w-full h-full gap-3 ">
            <div className="flex flex-row flex-wrap items-center justify-start order-1 w-full h-auto gap-2 py-1 lg:order-1">
              <span className="text-xs bling-badge">Más Vendido</span>
              <span className="text-xs bling-badge-neutral">+5000 Ventas</span>
            </div>

            <Title title={title} level="h2" className="order-2 lg:order-2 " titleClassName="dark:text-slate-300" description={description} descriptionClassName="my-3"></Title>

            <div className="order-3 w-full h-auto lg:order-3">

              <div className="flex flex-row flex-wrap w-full h-auto gap-2 py-1">
                <Sizes separator onSelect={() => { }} />
              </div>

              <div className="flex flex-row flex-wrap w-full h-auto gap-2 py-1">
                <Colors onSelect={() => { }} />
              </div>
            </div>
            <div className="flex flex-row flex-wrap order-4 w-full h-auto gap-2 lg:order-4">
              <ToCopy textToCopy={sku}>
                <div className="flex flex-row items-center justify-start h-auto gap-2 w-fit flex-nowrap bling-badge-neutral dark:bling-badge-neutral-black clickable">
                  <span className="text-[10px] font-bold bling-light-text dark:bling-dark-text">SKU:</span>
                  <span className="text-[10px] font-sans bling-light-text dark:bling-dark-text">{sku}</span>
                </div>
              </ToCopy>

              <ToCopy textToCopy={upc}>
                <div className="flex flex-row items-center justify-start h-auto gap-2 w-fit flex-nowrap bling-badge-neutral dark:bling-badge-neutral-black clickable">
                  <span className="text-[10px] font-bold bling-light-text dark:bling-dark-text">UPC:</span>
                  <span className="text-[10px] font-sans bling-light-text dark:bling-dark-text">{upc}</span>
                </div>
              </ToCopy>
              <div className="flex flex-row items-center justify-start h-auto gap-2 w-fit flex-nowrap bling-badge-neutral dark:bling-badge-neutral-black clickable text-nowrap">
                <span className="text-[10px] font-bold">STOCK:</span>
                {productDisplay.entity === 'product' && (
                  <span className="text-[10px] font-sans">{info?.stock}</span>
                )}
              </div>
              <div className="flex flex-row items-center justify-start h-auto gap-2 w-fit flex-nowrap bling-badge-neutral dark:bling-badge-neutral-black clickable text-nowrap">
                <span className="text-[10px] font-bold bling-light-text dark:bling-dark-text">Garantía:</span>
                <span className="text-[10px] font-sans bling-light-text dark:bling-dark-text">{warranty}</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between order-5 w-full h-auto p-2 bling-light dark:bling-dark rounded-md lg:order-5 text-slate-700">
              <div>
                <Quantity onChange={(_quantity) => setQuantity(_quantity)} initialQuantity={quantity} />
              </div>
              <div className="flex flex-row items-center justify-center h-auto w-fit">
                <div className="flex flex-col items-start justify-start h-auto px-2 leading-5 w-fit">
                  <span className="text-xs text-start">Antes:</span>
                  <span className="text-sm text-start">
                    <span className="text-xs uppercase">{priceBeforeCurrencyDisplay}</span>
                    <s>
                      {formattedPriceBefore}
                    </s>
                  </span>
                </div>
                <div className="flex flex-row items-center justify-center h-auto gap-1 px-2 font-bold leading-5 w-fit text-slate-700 dark:text-slate-300">
                  <span className="text-lg uppercase">{priceCurrencyDisplay}</span> <span className="text-4xl">{formattedPrice}</span>
                </div>
              </div>
            </div>

            <div className="order-6 lg:order-6 dark:bling-dark fixed lg:relative bottom-[55px] left-0 right-0 lg:bottom-auto lg:right-auto lg:left-auto z-[20] lg:z-1 lg:p-0 p-2 gap-2  lg:bg-transparent  lg:flex w-full h-auto  flex-row  justify-between  items-center rounded-md   text-slate-700">
              <div className="flex flex-row items-center justify-between w-full h-auto gap-2">
                <AddToCartButton className="w-1/2" fastAdd={true} />
                <AddToCartButton onClick={handleAddToCart} disabled={allowedVariants.length !== 1} className="w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export { MainInfo };
