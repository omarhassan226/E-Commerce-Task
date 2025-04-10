import { IProduct } from './product.model';

export interface ICart {
  product: IProduct;
  quantity: number;
}
