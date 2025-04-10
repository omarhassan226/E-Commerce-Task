import { Component, Input } from '@angular/core';
import { IHeroSectionItem } from '../../../../core/models/hero-sec.model';
import { DEFAULT_HERO_SEC_ITME } from '../../../../core/constants/hero-sec.constant';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  standalone: false,
})

export class HeroSectionComponent {
  @Input({required: true}) heroItem: IHeroSectionItem = DEFAULT_HERO_SEC_ITME;

  public assetsSource = 'assets/images/';

  get backgroundStyle() {
    return {
      backgroundImage: `url(${this.assetsSource}${this.heroItem.image})`
    };
  }
}
