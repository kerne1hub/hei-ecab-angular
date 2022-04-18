import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { CustomSelectOption } from './models';
import {
  FormControlState,
  NgrxDefaultViewAdapter,
  NGRX_FORM_VIEW_ADAPTER,
  Actions,
  SetValueAction,
  MarkAsDirtyAction
} from 'ngrx-forms';
import { SpinnerDiameterEnum, SpinnerTypeEnum } from '@shared/loading-spinner';

@Component({
  selector: 'custom-select',
  templateUrl: 'custom-select.html',
  styleUrls: ['custom-select.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NGRX_FORM_VIEW_ADAPTER,
      useExisting: forwardRef(() => NgrxDefaultViewAdapter),
      multi: true
    }
  ]
})
export class CustomSelectComponent<T extends string | number | boolean> {
  @Input() controlState: FormControlState<T>;
  @Input() options: Array<CustomSelectOption<T>>;
  @Input() placeholder: string;
  @Input() hasScroll: boolean;
  @Input() isLoading: boolean;
  @Input() label: string;
  @Input() isRequired: boolean;
  @Input() validationMessages: { [key: string]: string };
  @Input() triggerIcon: string;
  @Input() canRotateTriggerIcon: boolean;
  @Input() hasReset: boolean;

  @Input()
  public set needToReset(value: boolean) {
    if (value) {
      this.resetTriggered();
    }
  }

  @Output() loadNextPage: EventEmitter<void>;
  @Output() controlStateActionTriggered: EventEmitter<Actions<any>>;
  @Output() cleared: EventEmitter<void>;

  public get selectedOption(): CustomSelectOption<T> {
    return this.options?.find((option) => option.id === this.controlState.value);
  }

  public get selectedValueTitle(): string {
    return this.selectedOption?.title || this.placeholder;
  }

  public get isDisabled(): boolean {
    return this.controlState ? this.controlState.isDisabled : false;
  }

  public get isNotFound(): boolean {
    return !(this.isLoading || this.options?.length);
  }

  public spinnerTypeEnum: typeof SpinnerTypeEnum;
  public spinnerDiameterEnum: typeof SpinnerDiameterEnum;

  constructor() {
    this.loadNextPage = new EventEmitter();
    this.controlStateActionTriggered = new EventEmitter<Actions<any>>();
    this.cleared = new EventEmitter();

    this.options = [];
    this.placeholder = '';
    this.triggerIcon = 'toggle';
    this.canRotateTriggerIcon = true;
    this.hasReset = false;
    this.spinnerTypeEnum = SpinnerTypeEnum;
    this.spinnerDiameterEnum = SpinnerDiameterEnum;
  }

  public optionClicked(option: CustomSelectOption<T>): void {
    this.controlStateActionTriggered.emit(
      new SetValueAction(this.controlState.id, option.id)
    );

    if (this.controlState.isPristine) {
      this.controlStateActionTriggered.emit(
        new MarkAsDirtyAction(this.controlState.id)
      );
    }
  }

  public scrolled(): void {
    if (this.hasScroll) {
      this.loadNextPage.emit();
    }
  }

  public resetTriggered(): void {
    this.controlStateActionTriggered.emit(
      new SetValueAction(this.controlState.id, null)
    );

    this.cleared.emit();
  }
}
