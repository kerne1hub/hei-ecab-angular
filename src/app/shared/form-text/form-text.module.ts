import { CommonModule } from '@angular/common';
import { FormTextComponent } from './form-text.component';
import { NgModule } from '@angular/core';
import { NgrxFormsModule } from 'ngrx-forms';
import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [
    FormTextComponent
  ],
  imports: [
    CommonModule,
    NgrxFormsModule,
    IMaskModule
  ],
  exports: [
    FormTextComponent
  ]
})
export class FormTextModule { }
