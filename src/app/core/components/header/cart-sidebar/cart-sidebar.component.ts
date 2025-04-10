import { Component, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';

@Component({
  selector: 'app-cart-sidebar',
  imports: [CartItemComponent],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.scss',
})
export class CartSidebarComponent {
  private cartService = inject(CartService);

  get cart() {
    return this.cartService.cart;
  }

  get isCartOpen() {
    return this.cartService.isCartOpen;
  }

  set isCartOpen(value: boolean) {
    this.cartService.isCartOpen = value;
  }
}
