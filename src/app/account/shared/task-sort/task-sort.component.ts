import { Component, ChangeDetectionStrategy, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { Actions, FormControlState, NGRX_FORM_VIEW_ADAPTER, NgrxDefaultViewAdapter } from 'ngrx-forms';
import { AccountTaskSortComponentFacade } from './task-sort.facade';
import { CustomSelectOption } from '@shared/custom-select';

@Component({
  selector: 'account-task-sort',
  templateUrl: 'task-sort.html',
  styleUrls: ['task-sort.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NGRX_FORM_VIEW_ADAPTER,
      useExisting: forwardRef(() => NgrxDefaultViewAdapter),
      multi: true
    },
    AccountTaskSortComponentFacade
  ]
})
export class AccountTaskSortComponent {
  @Input() controlState: FormControlState<string>;
  @Input() validationMessages: { [key: string]: string };

  @Output() controlStateActionTriggered: EventEmitter<Actions<any>>;

  public options: Array<CustomSelectOption<string>>;

  constructor(
    private facade: AccountTaskSortComponentFacade
  ) {
    this.controlStateActionTriggered = new EventEmitter<Actions<any>>();
    this.options = this.facade.options;
  }
}
