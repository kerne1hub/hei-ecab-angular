import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AccountFacade } from './account.facade';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { SidebarState } from '@shared/sidebar';

@Component({
  selector: 'app-account-root',
  templateUrl: 'account.html',
  styleUrls: ['account.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    AccountFacade,
    ComponentStore
  ]
})
export class AccountComponent {
  public contentSidebarState$: Observable<SidebarState>;

  constructor(
    public changeDetector: ChangeDetectorRef,
    private readonly facade: AccountFacade
  ) {
    this.contentSidebarState$ = this.facade.contentSidebarState$;
  }

  public onRouteActivated(): void {
    this.changeDetector.detectChanges();
  }
}
