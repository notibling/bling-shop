import React, { useState } from 'react';
import _ from 'lodash';

import * as productOperations from '@/contexts/GlobalState/product/operations';
import { IProductDisplay } from '@/entities/ProductDisplay';

interface IProductsSearchContext {
  search: (query: string) => void

  searchValue: string
  setSearchValue: (value: string) => void

  productDisplays: IProductDisplay[];
  setProductDisplays: (value: IProductDisplay[]) => void
}

const ProductsSearchContext = React.createContext<IProductsSearchContext>({

  searchValue: '',
  setSearchValue: () => { },
  productDisplays: [],
  setProductDisplays: () => { },
  search: () => { }
});




interface IProductsSearchProvider {
  children: React.ReactNode;
}
const ProductsSearchProvider: React.FC<IProductsSearchProvider> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [productDisplays, setProductDisplays] = useState<IProductDisplay[]>([]);


  const search = _.throttle(async (query: string) => {
    const _productDisplays = await productOperations.fetchProductDisplays({
      page: 1,
      pageSize: 10,
      query
    })
    setSearchValue(query);
    setProductDisplays(_productDisplays.productDisplays ?? []);
  }, 300);

  return (
    <ProductsSearchContext.Provider
      value={{
        search,
        searchValue,
        setSearchValue,
        productDisplays,
        setProductDisplays,
      }}
    >
      {children}
    </ProductsSearchContext.Provider>
  );
}

function useProductsSearch() {

  return React.useContext(ProductsSearchContext);
}

export { ProductsSearchContext, ProductsSearchProvider, useProductsSearch }