import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, FormGroupState } from 'ngrx-forms';
import { AccountScheduleFilterForm } from '../../forms';
import { AccountSchedulePageFacade } from '../../../schedule.facade';

@Component({
  selector: 'schedule-filters',
  templateUrl: 'filters.html',
  styleUrls: ['filters.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountScheduleFiltersComponent {
  public filterFormState$: Observable<FormGroupState<AccountScheduleFilterForm>>;

  constructor(
    private facade: AccountSchedulePageFacade
  ) {
    this.filterFormState$ = this.facade.filterFormState$;
  }

  public formActionTriggered(action: Actions<any>): void {
    this.facade.handleFilterFormStateAction(action);
  }
}
