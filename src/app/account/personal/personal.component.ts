import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AccountPersonalPageFacade } from './personal.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'account-personal-page',
  templateUrl: 'personal.html',
  styleUrls: ['personal.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    AccountPersonalPageFacade
  ]
})
export class AccountPersonalPageComponent {
  public isLoading$: Observable<boolean>;

  constructor(
    private facade: AccountPersonalPageFacade
  ) {
  }
}
