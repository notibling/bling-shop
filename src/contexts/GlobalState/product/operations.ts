import { axios } from "@/common/AxiosClient";

import { ICreateProductStepperState } from "@/app/dashboard/(create)/products/create/types";
import { IAttribute, IAttributeValue } from "@/entities/Attribute";
import { IProduct, IProductDisplay, IService, IVehicle } from "@/entities/ProductDisplay";

import { Response } from "@/entities/Response";
import { Product } from "@/entities/Product";


const productDisplaySummary = (productDisplay: IProductDisplay): IProductDisplay['summary'] => {
  switch (productDisplay.entity) {
    case 'product':
      const p = productDisplay.product as IProduct
      const product = new Product(p)
      return {
        id: product.id,
        title: product.title,
        entity: 'product',
        description: product.description,
        price: product.getPrice(),
        priceBefore: product.getPriceBefore(),
        images: product.images,
        shortDescription: product.shortDescription
      }

    case 'service':
      const service = productDisplay.service as IService;
      return {
        id: service.id,
        title: service.title,
        entity: 'service',
        description: service.description,
        price: service.price,
        priceBefore: service.price,
        images: service.images,
        shortDescription: service.shortDescription
      }

    case 'vehicle':
      const vehicle = productDisplay.vehicle as IVehicle;
      return {
        id: vehicle.id,
        title: vehicle.title,
        entity: 'vehicle',
        description: vehicle.description,
        price: vehicle.price,
        priceBefore: vehicle.price,
        images: vehicle.images,
        shortDescription: vehicle.shortDescription
      }
  }

}


type IFetchProductDisplays = Response<{
  productDisplays: IProductDisplay[]
}>;


interface IFetchProductDisplaysPayload { page: number; pageSize?: number; query?: string; }
const fetchProductDisplays = async (params: IFetchProductDisplaysPayload): Promise<IFetchProductDisplays> => {
  const response = await axios.get<IFetchProductDisplays>('/products/v2/displays', { params });
  const { productDisplays } = response.data;


  const _productDisplays = productDisplays.map(productDisplay => {
    return {
      ...productDisplay,
      summary: productDisplaySummary(productDisplay)
    }
  });

  return { ...response.data, productDisplays: _productDisplays };
}

type IFetchProducts = Response<{
  products: IProduct[]
}>;


interface IFetchProductsPayload { page: number; pageSize?: number; query?: string; }
const fetchProducts = async (params: IFetchProductsPayload): Promise<IFetchProducts> => {
  const response = await axios.get('/products/v2', { params });

  return response.data;
}


type IFetchAttributes = Response<{
  attributes: IAttribute[]
}>;
const fetchAttributes = async (type: string): Promise<IFetchAttributes> => {
  const response = await axios.get('/products/attributes', { params: { type } });

  return response.data;
}

type ICreateAttribute = Response<{}>;
interface ICreateAttributePayload {
  attribute: Partial<IAttribute>;
  values: Partial<IAttributeValue>[];
}
const createAttribute = async (payload: ICreateAttributePayload): Promise<ICreateAttribute> => {
  const response = await axios.post('/products/attributes', payload);

  return response.data;
}



const createProduct = async (product: ICreateProductStepperState): Promise<Response<{}>> => {
  const response = await axios.post('/products', product);

  return response.data;
}

const deleteProduct = async (id: number): Promise<Response<{}>> => {
  const response = await axios.delete(`/products/v2/displays/${id}`);

  return response.data;
}


type GetProductDisplay = Response<{ productDisplay: IProductDisplay }>;
const getProductDisplay = async (id: number): Promise<GetProductDisplay> => {
  const { data } = await axios.get<GetProductDisplay>(`/products/v2/displays/${id}`);

  if (!data?.productDisplay) throw new Error('Product not found');

  const productDisplay = data.productDisplay;
  const summary = productDisplaySummary(productDisplay);

  return { ...data, productDisplay: { ...productDisplay, summary } };

}


export {
  fetchProductDisplays, fetchAttributes,
  createProduct, createAttribute,
  fetchProducts, deleteProduct, getProductDisplay,
  type IFetchAttributes, type IFetchProductDisplays,
  type ICreateAttribute,
  type ICreateAttributePayload,
  type IFetchProducts, type IFetchProductsPayload
};