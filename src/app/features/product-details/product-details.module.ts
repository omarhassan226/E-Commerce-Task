import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [ProductDetailsRoutingModule, SharedModule],
})
export class ProductDetailsModule {}
