import { Component, inject, Input } from '@angular/core';
import { IProduct } from '../../../core/models/product.model';
import { DEFAULT_PRODUCT } from '../../../core/constants/product.constant';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product: IProduct = DEFAULT_PRODUCT;

  private cartService = inject(CartService);

  addProductToTheCart(productId: string) {
    this.cartService.addProductToTheCart(productId);
  }
}
