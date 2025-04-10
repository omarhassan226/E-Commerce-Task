import { Component, inject, Input } from '@angular/core';
import { ICart } from '../../../../models/cart.model';
import { DEFAULT_CART } from '../../../../constants/cart.constant';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input({ required: true }) cartItem: ICart = DEFAULT_CART;

  private cartService = inject(CartService);

  increaseCartItemQuantity() {
    this.cartService.increaseCartItemQuantity(this.cartItem);
  }

  decreaseCartItemQuantity() {
    this.cartService.decreaseCartItemQuantity(this.cartItem);
  }

  removeCartItem() {
    this.cartService.removeCartItem(this.cartItem.product.id);
  }
}
