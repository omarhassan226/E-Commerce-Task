import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'product-details',
    loadChildren: () =>
      import('./features/product-details/product-details.module').then(
        (m) => m.ProductDetailsModule
      ),
  },
];
