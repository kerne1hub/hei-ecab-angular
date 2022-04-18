import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { AccountTasksFilterForm } from './shared/forms';

export class AccountTasksPageState {
  public filterFormState: FormGroupState<AccountTasksFilterForm>;

  constructor() {
    this.filterFormState = createFormGroupState<AccountTasksFilterForm>('AccountTasksFilterForm', {
      search: null,
      sortBy: undefined
    });
  }
}
