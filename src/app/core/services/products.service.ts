import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';
import { MOCKING_PRODUCTS } from '../mocks/products.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: IProduct[] = MOCKING_PRODUCTS;

  getProductById(productId: string) {
    return this.products.find((product) => product.id === productId);
  }
}
