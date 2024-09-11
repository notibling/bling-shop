import { IProductDisplay } from "@/entities/ProductDisplay";
import { IProductVariant } from "@/entities/ProductVariant";

interface ICartItem {
  title: string;
  price: number;
  id: number;
  image: string;
  quantity: number;
  priceBefore: number;
  details: {
    variants?: Omit<ICartItem, 'details'>[];
  }
}



interface ICartContext {
  cartItems: ICartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<ICartItem[]>>;
  cartItemsCount: number;
  
  addToCart (arg: { variant?: IProductVariant, productDisplay: IProductDisplay; quantity?: number }): void;
  changeProductQuantity(arg: { item: ICartItem, variant?: Omit<ICartItem, 'details'>, quantity: number }): void;
  getCartItem: (id: number) => ICartItem | undefined;
}

export { type ICartContext, type ICartItem };