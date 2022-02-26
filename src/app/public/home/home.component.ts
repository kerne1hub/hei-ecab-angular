import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PublicHomePageFacade } from './home.facade';

@Component({
  selector: 'public-home-page',
  templateUrl: 'home.html',
  styleUrls: ['home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHomePageComponent {

  constructor(
    private facade: PublicHomePageFacade
  ) {
  }
}
