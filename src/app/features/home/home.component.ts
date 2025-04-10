import { Component, inject } from '@angular/core';
import { IHeroSectionItem } from '../../core/models/hero-sec.model';
import { MOCKING_HERO_SECTIONS } from '../../core/mocks/hero-sections.mock';
import { IProduct } from '../../core/models/product.model';
import { MOCKING_PRODUCTS } from '../../core/mocks/products.mock';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent {
  private productsService = inject(ProductsService);
  public heroSectionItems: IHeroSectionItem[] = MOCKING_HERO_SECTIONS;

  get products() {
    return this.productsService.products;
  }
}
