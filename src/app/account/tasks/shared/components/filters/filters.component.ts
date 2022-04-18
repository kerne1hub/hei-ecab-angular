import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, FormGroupState } from 'ngrx-forms';
import { AccountTasksFilterForm } from '../../forms';
import { AccountTasksPageFacade } from '../../../tasks.facade';

@Component({
  selector: 'tasks-filters',
  templateUrl: 'filters.html',
  styleUrls: ['filters.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTasksFiltersComponent {
  public filterFormState$: Observable<FormGroupState<AccountTasksFilterForm>>;

  constructor(
    private facade: AccountTasksPageFacade
  ) {
    this.filterFormState$ = this.facade.filterFormState$;
  }

  public formActionTriggered(action: Actions<any>): void {
    this.facade.handleFilterFormStateAction(action);
  }
}
