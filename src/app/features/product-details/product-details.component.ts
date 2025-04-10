import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  standalone: false,
})
export class ProductDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params['productId']);
      },
    });
  }
}
