import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormControlState, NgrxDefaultViewAdapter, NGRX_FORM_VIEW_ADAPTER, Actions } from 'ngrx-forms';

@Component({
  selector: 'form-password',
  templateUrl: 'form-password.html',
  styleUrls: ['form-password.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NGRX_FORM_VIEW_ADAPTER,
      useExisting: forwardRef(() => NgrxDefaultViewAdapter),
      multi: true
    }
  ]
})
export class FormPasswordComponent {
  @Input() controlState: FormControlState<string>;
  @Input() isVisible: boolean;
  @Input() autocomplete: string;
  @Input() placeholder: string;
  @Input() leftIcon: string;
  @Input() rightIcon: string;
  @Input() leftActionIcon: string;
  @Input() rightActionIcon: string;
  @Input() isIconShown: boolean;
  @Input() validationMessages: { [key: string]: string };
  @Input() withStrength: boolean;
  @Input() dataTestID: string;
  @Input() fieldRole: string;
  @Input() label: string;

  @Output() controlStateActionTriggered: EventEmitter<Actions<any>>;
  @Output() leftActionTriggered: EventEmitter<void>;
  @Output() rightActionTriggered: EventEmitter<void>;

  constructor() {
    this.placeholder = '';
    this.isIconShown = true;

    this.controlStateActionTriggered = new EventEmitter<Actions<any>>();
    this.leftActionTriggered = new EventEmitter<void>();
    this.rightActionTriggered = new EventEmitter<void>();
  }
}
