import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { Actions, FormControlState, NGRX_FORM_VIEW_ADAPTER, NgrxCheckboxViewAdapter } from 'ngrx-forms';

@Component({
  selector: 'form-checkbox',
  templateUrl: 'form-checkbox.html',
  styleUrls: ['form-checkbox.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NGRX_FORM_VIEW_ADAPTER,
      useExisting: forwardRef(() => NgrxCheckboxViewAdapter),
      multi: true
    }
  ]
})
export class FormCheckBoxComponent {
  @Input() controlState: FormControlState<boolean>;
  @Input() label: string;
  @Input() dataTestID: string;
  @Input() fieldRole: string;

  @Output() controlStateActionTriggered: EventEmitter<Actions<any>>;

  constructor() {
    this.controlStateActionTriggered = new EventEmitter<Actions<any>>();
  }
}
