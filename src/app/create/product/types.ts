import { IFile } from '@/entities/File';
import { PartialIProductVariant } from './Product/Steps/ProductVariants/types';
import { IProductAttribute } from '@/entities/ProductAttribute';

export interface ICreateProductStepperState {
  type?: 'product' | 'service' | 'vehicle' | 'property';
  title?: string;
  images: IFile[];
  sku?: string;
  upc?: string;
  description?: string;
  sellingZone: string[];
  shippingCost: number | null;
  hasShipping: boolean;
  pickupLocation: string;
  paymentMethods: string[];
  condition: 'new' | 'used' | 'refurbished' | null;
  categories: number[];
  variants: PartialIProductVariant[];
  attributes: Partial<IProductAttribute>[];
}
