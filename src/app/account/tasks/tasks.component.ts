import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AccountTasksPageFacade } from './tasks.facade';
import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'account-tasks-page',
  templateUrl: 'tasks.html',
  styleUrls: ['tasks.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    AccountTasksPageFacade,
    ComponentStore
  ]
})
export class AccountTasksPageComponent {
  public isLoading$: Observable<boolean>;

  constructor(
    private facade: AccountTasksPageFacade
  ) {
  }
}
