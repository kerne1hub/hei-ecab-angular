import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AccountSchedulePageFacade } from './schedule.facade';
import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'account-schedule-page',
  templateUrl: 'schedule.html',
  styleUrls: ['schedule.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    AccountSchedulePageFacade,
    ComponentStore
  ]
})
export class AccountSchedulePageComponent {
  public isLoading$: Observable<boolean>;

  constructor(
    private facade: AccountSchedulePageFacade
  ) {
  }
}
