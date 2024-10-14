import { IFile } from './File';
import { ICategory, IProductAttribute } from './ProductDisplay';
import { IProductVariant } from './ProductVariant';

export interface IProduct {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  price: number;
  priceBefore: number;
  stock: number;
  sku: string;
  upc: string;
  hasShipping: boolean;
  shippingCost: number;
  pickupLocation: string;
  legalAge: boolean;
  hasRefund: boolean;
  refundCost: number;
  condition: 'new' | 'used' | 'refurbished';
  userId: number;
  sellingZone: string;
  paymentMethods: string[];
  images: IFile[];
  attributes?: IProductAttribute[];
  variants: IProductVariant[];
  categories: ICategory[];
  
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

// Añade esta interfaz
export interface INestedCategories extends ICategory {
  children?: INestedCategories[];
}

class Product {
  public id!: number;
  public title!: string;
  public description!: string;
  public shortDescription!: string;
  public category!: string | any;
  public price!: number;
  public priceBefore!: number;
  public stock!: number;
  public sku!: string;
  public upc!: string;
  public hasShipping!: boolean;
  public shippingCost!: number;
  public pickupLocation!: string;
  public legalAge!: boolean;
  public hasRefund!: boolean;
  public refundCost!: number;
  public condition!: 'new' | 'used' | 'refurbished';
  public userId!: number;
  public sellingZone!: string;
  public paymentMethods!: string[];
  public images!: IFile[];
  public attribtues?: IProductAttribute[];
  public variants!: IProductVariant[];
  public createdAt!: string;
  public updatedAt!: string;
  public deletedAt!: string;

  constructor(product: IProduct) {
    Object.assign(this, product);
  }

  toJSON(): IProduct {
    return JSON.parse(JSON.stringify(this)) as IProduct;
  }

  /**
   * Returns the price of the product.
   *
   * @return {number} The price of the product.
   */
  getPrice() {
    const mainVariant = this.variants.find((v) => v.main);

    const price = mainVariant?.price || this.price || undefined;

    return price;
  }

  getPriceBefore() {
    const mainVariant = this.variants.find((v) => v.main);
    const priceBefore = mainVariant?.priceBefore || this.priceBefore || undefined;
    
    return priceBefore;
  }

  getStock() {
    const mainVariant = this.variants.find((v) => v.main);

    const stock = mainVariant?.stock || this.stock || undefined;

    return stock;
  }
}

export { Product };