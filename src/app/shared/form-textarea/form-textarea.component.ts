import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormControlState, NgrxDefaultViewAdapter, NGRX_FORM_VIEW_ADAPTER, Actions } from 'ngrx-forms';

@Component({
  selector: 'form-textarea',
  templateUrl: 'form-textarea.html',
  styleUrls: ['form-textarea.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NGRX_FORM_VIEW_ADAPTER,
      useExisting: forwardRef(() => NgrxDefaultViewAdapter),
      multi: true
    }
  ]
})
export class FormTextareaComponent {
  @Input() controlState: FormControlState<string>;
  @Input() placeholder: string = '';
  @Input() validationMessages: { [key: string]: string };
  @Input() dataTestID: string;
  @Input() fieldRole: string;
  @Input() label: string;
  @Input() isRequired: boolean;

  @Output() controlStateActionTriggered: EventEmitter<Actions<any>>;

  constructor() {
    this.controlStateActionTriggered = new EventEmitter<Actions<any>>();
  }
}
