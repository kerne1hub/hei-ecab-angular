import IMask from 'imask';
import { ChangeDetectionStrategy, Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { FormControlState, NgrxDefaultViewAdapter, NGRX_FORM_VIEW_ADAPTER, Actions } from 'ngrx-forms';

@Component({
  selector: 'form-text',
  templateUrl: 'form-text.html',
  styleUrls: ['form-text.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NGRX_FORM_VIEW_ADAPTER,
      useExisting: forwardRef(() => NgrxDefaultViewAdapter),
      multi: true
    }
  ]
})
export class FormTextComponent {
  @Input() controlState: FormControlState<string>;
  @Input() type: string;
  @Input() autocomplete: string = 'off';
  @Input() placeholder: string = '';
  @Input() leftIcon: string;
  @Input() rightIcon: string;
  @Input() leftActionIcon: string;
  @Input() rightActionIcon: string;
  @Input() isIconShown: boolean = true;
  @Input() validationMessages: { [key: string]: string };
  @Input() dataTestID: string;
  @Input() fieldRole: string;
  @Input() label: string;
  @Input() isRequired: boolean;
  @Input() maxLength: number;
  @Input() mask: IMask.AnyMaskedOptions;
  @Input() isUnmaskValue: boolean = true;
  @Input() min: number;

  @Output() controlStateActionTriggered: EventEmitter<Actions<any>>;
  @Output() leftActionTriggered: EventEmitter<void>;
  @Output() rightActionTriggered: EventEmitter<void>;

  constructor() {
    this.controlStateActionTriggered = new EventEmitter<Actions<any>>();
    this.leftActionTriggered = new EventEmitter<void>();
    this.rightActionTriggered = new EventEmitter<void>();
  }
}
