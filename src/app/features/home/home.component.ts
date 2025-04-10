import { Component } from '@angular/core';
import { IHeroSectionItem } from '../../core/models/hero-sec.model';
import { MOCKING_HERO_SECTIONS } from '../../core/mocks/hero-sections.mock';
import { IProduct } from '../../core/models/product.model';
import { MOCKING_PRODUCTS } from '../../core/mocks/products.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent {
  heroSectionItems: IHeroSectionItem[] = MOCKING_HERO_SECTIONS;
  products: IProduct[] = MOCKING_PRODUCTS;
}
