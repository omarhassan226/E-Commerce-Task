import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@NgModule({
  declarations: [HomeComponent, HeroSectionComponent],
  imports: [HomeRoutingModule],
})
export class HomeModule {}
