import { ChangeDetectionStrategy, Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { Actions, FormControlState, NgrxDefaultViewAdapter, NgrxValueConverter, NGRX_FORM_VIEW_ADAPTER } from 'ngrx-forms';
import { DatepickerDropdownPositionX, DatepickerDropdownPositionY } from '@angular/material/datepicker';
import { FormDatepickerFacade } from './form-datepicker.facade';
import { dateValueConverter } from '@shared/date-converter';
import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'form-datepicker',
  templateUrl: 'form-datepicker.html',
  styleUrls: ['form-datepicker.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    FormDatepickerFacade,
    ComponentStore,
    {
      provide: NGRX_FORM_VIEW_ADAPTER,
      useExisting: forwardRef(() => NgrxDefaultViewAdapter),
      multi: true
    }
  ]
})
export class FormDatepickerComponent {
  @Input() controlState: FormControlState<string>;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() isRequired: boolean;
  @Input() isDisabled: boolean;
  @Input() timePickerEnabled: boolean;
  @Input() validationMessages: { [key: string]: string };
  @Input() dataTestID: string;
  @Input() dateFilter: (date: Date) => boolean;
  @Input() xPosition: DatepickerDropdownPositionX;

  @Output() controlStateActionTriggered: EventEmitter<Actions<any>>;

  public dateValueConverter: NgrxValueConverter<Date, string>;
  public isOpened$: Observable<boolean>;
  public positionY$: Observable<DatepickerDropdownPositionY>;

  constructor(
    private facade: FormDatepickerFacade
  ) {
    this.controlStateActionTriggered = new EventEmitter<Actions<any>>();
    this.dateValueConverter = dateValueConverter;
    this.isOpened$ = this.facade.isOpened$;
    this.positionY$ = this.facade.positionY$;
  }

  public datePickerOpened(): void {
    this.facade.open();
  }

  public datePickerClosed(): void {
    this.facade.close();
  }

  public positionYChanged(positionY: DatepickerDropdownPositionY): void {
    this.facade.changePositionY(positionY);
  }
}
