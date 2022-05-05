import { ChangeDetectionStrategy, Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { FormControlState, NGRX_FORM_VIEW_ADAPTER, NgrxCheckboxViewAdapter, Actions } from 'ngrx-forms';

@Component({
  selector: 'form-toggle-checkbox',
  templateUrl: 'form-toggle-checkbox.html',
  styleUrls: ['form-toggle-checkbox.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NGRX_FORM_VIEW_ADAPTER,
      useExisting: forwardRef(() => NgrxCheckboxViewAdapter),
      multi: true
    }
  ]
})
export class FormToggleCheckboxComponent {
  @Input() controlState: FormControlState<boolean>;
  @Input() label: string;
  @Input() dataTestID: string;
  @Input() fieldRole: string;

  @Output() controlStateActionTriggered: EventEmitter<Actions<any>>;

  constructor() {
    this.controlStateActionTriggered = new EventEmitter<Actions<any>>();
  }
}
