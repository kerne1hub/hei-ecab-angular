import { Injectable } from '@angular/core';
import { SidebarState } from '@shared/sidebar';
import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store';
import { AccountState } from './account.state';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/store';
import { AccountSelectors } from './shared/store/selectors';
import { AccountActions } from './shared/store/actions';

@Injectable()
export class AccountFacade {
  public get contentSidebarState$(): Observable<SidebarState> {
    return this.store.select(AccountSelectors.contentSidebarState);
  }

  constructor(
    private readonly store: Store<AppState>,
    private readonly componentStore: ComponentStore<AccountState>
  ) {
    this.resetState();
  }

  public resetState(): void {
    this.store.dispatch(AccountActions.resetState());
    this.componentStore.setState(new AccountState());
  }
}
