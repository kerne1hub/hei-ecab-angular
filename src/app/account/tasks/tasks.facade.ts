import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/store';
import { ComponentStore } from '@ngrx/component-store';
import { AccountTasksPageState } from './tasks.state';
import { Actions, formGroupReducer, FormGroupState } from 'ngrx-forms';
import { AccountTasksFilterForm } from './shared/forms';

@Injectable()
export class AccountTasksPageFacade {
  public get filterFormState$(): Observable<FormGroupState<AccountTasksFilterForm>> {
    return this.componentStore.select((state) => state.filterFormState);
  }

  constructor(
    private readonly store: Store<AppState>,
    private readonly componentStore: ComponentStore<AccountTasksPageState>
  ) {
    this.resetState();
  }

  public resetState(): void {
    this.componentStore.setState(new AccountTasksPageState());
  }

  public handleFilterFormStateAction(action: Actions<any>) {
    this.updateFilterFormState(action);
  }

  private updateFilterFormState(action: Actions<any>): void {
    this.componentStore.updater(
      (state) => ({
        ...state,
        filterFormState: formGroupReducer(state.filterFormState, action)
      })
    )();
  }
}
