import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartSidebarComponent } from './cart-sidebar/cart-sidebar.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CartSidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private cartService = inject(CartService);

  get totalQuantity() {
    return this.cartService.getTotalQuantity();
  }

  set isCartOpen(value: boolean) {
    this.cartService.isCartOpen = value;
  }
}
