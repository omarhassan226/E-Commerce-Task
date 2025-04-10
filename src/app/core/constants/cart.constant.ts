import { ICart } from '../models/cart.model';
import { DEFAULT_PRODUCT } from './product.constant';

export const DEFAULT_CART: ICart = {
  product: DEFAULT_PRODUCT,
  quantity: 0,
};
