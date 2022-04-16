import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { AccountScheduleFilterForm } from './shared/forms';

export class AccountSchedulePageState {
  public filterFormState: FormGroupState<AccountScheduleFilterForm>;

  constructor() {
    this.filterFormState = createFormGroupState<AccountScheduleFilterForm>('AccountScheduleFilterForm', {
      search: null,
      date: undefined
    });
  }
}
