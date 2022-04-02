import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AccountOverviewPageFacade } from './overview.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'account-overview-page',
  templateUrl: 'overview.html',
  styleUrls: ['overview.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountOverviewPageComponent {
  public isLoading$: Observable<boolean>;

  constructor(
    private facade: AccountOverviewPageFacade
  ) {
  }
}
