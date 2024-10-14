import { IFile } from './File';
import { IProduct } from './Product';
import { IService } from './Service';
import { IVehicle } from './Vehicle';
import { ICategory, INestedCategories } from './Category';
import { IProductAttribute } from './ProductAttribute';


type IProductDisplayEntity = 'product' | 'service' | 'vehicle';
interface IProductDisplay {
  id: number;
  productId: number;
  displayOwner: number;
  revenuePercentage: number;

  expirationDate: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  entity: IProductDisplayEntity;
  summary?: IProductDisplaySummary;

  product?: IProduct;
  service?: IService;
  vehicle?: IVehicle;
}


interface IProductDisplaySummary {
  id: number;
  entity: IProductDisplayEntity;
  title: string;
  description?: string;
  shortDescription: string

  price?: number;
  priceBefore?: number;
  stock?: number;
  images: IFile[];
}


export {
  type IProductDisplay,
  type IProduct, type IService, type IVehicle,
  type IProductAttribute,
  type ICategory,
  type INestedCategories
};