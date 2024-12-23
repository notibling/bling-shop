import { IFile } from './File';
import { IProductAttribute } from './ProductDisplay';

export interface IVehicle {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  userId: number;
  sellingZone: string;
  paymentMethods: string[];
  images: IFile[];
  attributes?: IProductAttribute[];
}
