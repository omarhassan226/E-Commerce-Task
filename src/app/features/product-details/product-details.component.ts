import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../core/models/product.model';
import { DEFAULT_PRODUCT } from '../../core/constants/product.constant';
import { ProductsService } from '../../core/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  standalone: false,
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private productsService = inject(ProductsService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private subscription = new Subscription();

  public product: IProduct = DEFAULT_PRODUCT;

  ngOnInit(): void {
    this.subscription.add(
      this.activatedRoute.params.subscribe({
        next: (params) => {
          const product = this.productsService.getProductById(params['productId']);

          if (!product) this.router.navigate(['']);
          else this.product = product;
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
