import { CommonModule } from '@angular/common';
import { FormToggleCheckboxComponent } from './form-toggle-checkbox.component';
import { NgModule } from '@angular/core';
import { NgrxFormsModule } from 'ngrx-forms';

@NgModule({
  declarations: [
    FormToggleCheckboxComponent
  ],
  imports: [
    CommonModule,
    NgrxFormsModule
  ],
  exports: [
    FormToggleCheckboxComponent
  ]
})
export class FormToggleCheckboxModule { }
