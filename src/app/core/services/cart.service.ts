import { Injectable } from '@angular/core';
import { ICart } from '../models/cart.model';
import { MOCKING_CART } from '../mocks/cart.mock';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public isCartOpen = true;
  public cart: ICart[] = MOCKING_CART;
}
