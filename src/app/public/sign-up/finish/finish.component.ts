import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PublicSignUpFinishPageFacade } from './finish.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'public-sign-up-finish-page',
  templateUrl: 'finish.html',
  styleUrls: ['finish.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicSignUpFinishPageComponent {
  public isLoading$: Observable<boolean>;

  constructor(
    private facade: PublicSignUpFinishPageFacade
  ) {
  }
}
