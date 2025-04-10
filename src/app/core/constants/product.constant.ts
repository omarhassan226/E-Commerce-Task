import { IProduct } from '../models/product.model';
import { DEFAULT_PRODUCT_DESCRIPTION } from './product-description.constant';

export const DEFAULT_PRODUCT: IProduct = {
  id: '',
  name: '',
  type: '',
  image: '',
  price: 0,
  stock: 0,
  descriptions: [],
};
