import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared/shared.module";
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, HeroSectionComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
