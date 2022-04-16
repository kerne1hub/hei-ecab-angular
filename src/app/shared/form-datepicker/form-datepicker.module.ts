import { CommonModule } from '@angular/common';
import { FormDatepickerComponent } from './form-datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { NgrxFormsModule } from 'ngrx-forms';
import { ValidationErrorsModule } from '@shared/validation-errors';
import { FormDatepickerFacade } from './form-datepicker.facade';
import { ComponentStore } from '@ngrx/component-store';
import { FormDatepickerDirective } from './form-datepicker.directive';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule, NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';
import { configuration } from '@configurations';

@NgModule({
  declarations: [
    FormDatepickerComponent,
    FormDatepickerDirective
  ],
  imports: [
    CommonModule,
    NgrxFormsModule,
    ValidationErrorsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveComponentModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule
  ],
  exports: [
    FormDatepickerComponent
  ],
  providers: [
    FormDatepickerFacade,
    ComponentStore,
    { provide: NGX_MAT_DATE_FORMATS, useValue: configuration.datepicker.dateTimeFormats }
  ]
})
export class FormDatepickerModule { }
