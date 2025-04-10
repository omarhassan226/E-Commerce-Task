import { ICart } from '../models/cart.model';
import { MOCKING_PRODUCTS } from './products.mock';

export const MOCKING_CART: ICart[] = [
  {
    product: MOCKING_PRODUCTS[0],
    quantity: 2,
  },
  {
    product: MOCKING_PRODUCTS[2],
    quantity: 4,
  },
];
