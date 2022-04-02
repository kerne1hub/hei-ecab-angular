import { CommonModule } from '@angular/common';
import { FormCheckBoxComponent } from './form-checkbox.component';
import { NgModule } from '@angular/core';
import { NgrxFormsModule } from 'ngrx-forms';

@NgModule({
  declarations: [
    FormCheckBoxComponent
  ],
  imports: [
    CommonModule,
    NgrxFormsModule
  ],
  exports: [
    FormCheckBoxComponent
  ]
})
export class FormCheckboxModule { }
