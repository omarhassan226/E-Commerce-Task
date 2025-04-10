import { Component, Input } from '@angular/core';
import { ICart } from '../../../../models/cart.model';
import { DEFAULT_CART } from '../../../../constants/cart.constant';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input({ required: true }) cartItem: ICart = DEFAULT_CART;
}
