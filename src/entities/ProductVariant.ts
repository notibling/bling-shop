import { IAttribute } from './Attribute';
import { IFile } from './File';

interface IProductVariantAttribute {
  id: number;
  attributeId: number;
  attributeValue: string;
  variantId: number;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;

  attribute?: Omit<IAttribute, 'values'>;
}

interface IProductVariant {
  id: number;
  images: IFile[];
  price: number;
  priceBefore: number;
  stock: number;
  skuSuffix: string;
  productId: number;
  main: boolean;
  // * Join
  variantAttributes: IProductVariantAttribute[] | null;

  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export { type IProductVariant, type IProductVariantAttribute };