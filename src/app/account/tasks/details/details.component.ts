import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { AccountTasksDetailsPageFacade } from './details.facade';
import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'account-tasks-details-page',
  templateUrl: 'details.html',
  styleUrls: ['details.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ComponentStore,
    AccountTasksDetailsPageFacade
  ]
})
export class AccountTasksDetailsPageComponent implements OnInit, OnDestroy {
  public isLoading$: Observable<boolean>;

  constructor(
    private facade: AccountTasksDetailsPageFacade
  ) {
  }

  public ngOnInit(): void {
    this.facade.initPage();
  }

  public ngOnDestroy(): void {
    this.facade.resetState();
  }
}
