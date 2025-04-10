import { IProductDescription } from './product-description.model';

export interface IProduct {
  id: string;
  name: string;
  image: string;
  type: string;
  price: number;
  stock: number;
  descriptions: IProductDescription[];
}
