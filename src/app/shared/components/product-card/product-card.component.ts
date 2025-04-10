import { Component, Input } from '@angular/core';
import { IProduct } from '../../../core/models/product.model';
import { DEFAULT_PRODUCT } from '../../../core/constants/product.constant';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product: IProduct = DEFAULT_PRODUCT;
}
