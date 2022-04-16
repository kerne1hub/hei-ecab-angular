import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/store';
import { Actions, formGroupReducer, FormGroupState } from 'ngrx-forms';
import { AccountScheduleFilterForm } from './shared/forms';
import { ComponentStore } from '@ngrx/component-store';
import { AccountSchedulePageState } from './schedule.state';

@Injectable()
export class AccountSchedulePageFacade {
  public get filterFormState$(): Observable<FormGroupState<AccountScheduleFilterForm>> {
    return this.componentStore.select((state) => state.filterFormState);
  }

  constructor(
    private readonly componentStore: ComponentStore<AccountSchedulePageState>,
    private readonly store: Store<AppState>
  ) {
    this.resetState();
  }

  public resetState(): void {
    this.componentStore.setState(new AccountSchedulePageState());
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
