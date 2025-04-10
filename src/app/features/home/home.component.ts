import { Component } from '@angular/core';
import { IHeroSectionItem } from '../../core/models/hero-sec.model';
import { MOCKING_HERO_SECTIONS } from '../../core/mocks/hero-sections.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent {
  heroSectionItems: IHeroSectionItem[] = MOCKING_HERO_SECTIONS;
}
