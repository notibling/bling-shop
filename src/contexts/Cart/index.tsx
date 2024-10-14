'use client';
import React, { createContext, useContext, useMemo, useState } from 'react';
import { cloneDeep, compact } from 'lodash';


import { ICartContext, ICartItem } from './types';
import { getStaticFileUrl } from '@/utils';


const CartContext = createContext<ICartContext>({
  cartItems: [],
  cartItemsCount: 0,

  addToCart: () => { },
  changeProductQuantity: () => { },
  setCartItems: () => { },
  getCartItem: () => undefined
});

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const getCartItem = (id: number) => {
    return cartItems.find(item => item.id === id);
  };


  const cartItemsCount = useMemo(() => {
    return cartItems.reduce((acc, crr) => acc + crr.quantity, 0);
  }, [cartItems]);


  const changeProductQuantity: ICartContext['changeProductQuantity'] = ({ item: cartItem, variant: _variant, quantity }) => {
    setCartItems((prev) => {
      const items = cloneDeep(prev);
      return items.map(item => {
        if (item.id === cartItem.id) {

          // * Updating variant too
          const _itemVariants = item.details.variants?.map(v => {
            if (v.id === _variant?.id) {
              return {
                ...v,
                quantity
              };
            }
            return v;
          });

          return {
            ...item, quantity, details: {
              ...item.details,
              variants: _itemVariants
            }
          };
        }

        return item;
      });

    });
  };

  const addToCart: ICartContext['addToCart'] = ({ productDisplay, variant: _variant, quantity = 1 }) => {
    const variant: any = {
      id: _variant?.id,
      details: {},
      quantity,
      title: (_variant?.variantAttributes ?? []).map(attr => attr.attributeValue).join(' - '),
      image: getStaticFileUrl(productDisplay?.product?.images[0]) ?? '',
      price: _variant?.price,
      priceBefore: _variant?.price

    };

    setCartItems(prev => {
      const cartItemIndex = prev.findIndex(item => item.id === productDisplay.id);
      debugger;
      if (cartItemIndex === -1) {
        return [...prev, {
          id: productDisplay.id,
          title: productDisplay.summary?.title ?? '',
          quantity,
          price: productDisplay.summary?.price ?? 0,
          priceBefore: productDisplay.summary?.price ?? 0,
          image: getStaticFileUrl(productDisplay.summary?.images[0]) ?? '',

          details: {
            variants: compact([variant])
          }
        }];
      } else {
        const variantAlreadyExist = prev[cartItemIndex].details.variants?.find(v => v.id === variant?.id ?? null);
        debugger;
        if (variantAlreadyExist) {
          return cloneDeep(prev).map((item, index) => {
            if (index !== cartItemIndex) return item;


            const variants = item.details.variants?.map(v => {
              if (v.id === variant?.id) {
                return { ...v, quantity: v.quantity + quantity };
              }
              return v;
            });
            debugger;

            return {
              ...item, quantity: item.quantity + quantity, details: {
                variants
              }
            };
          });
        }


        return cloneDeep(prev).map((item, index) => {
          if (index !== cartItemIndex) return item;
          return {
            ...item, quantity: item.quantity + quantity, details: {
              variants: compact([...(item?.details?.variants ?? []), variant])
            }
          };
        });
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, cartItemsCount, setCartItems, addToCart, getCartItem, changeProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  return useContext(CartContext);
}

export { CartProvider, useCart };