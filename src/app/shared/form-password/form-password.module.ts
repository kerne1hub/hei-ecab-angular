import { CommonModule } from '@angular/common';
import { FormPasswordComponent } from './form-password.component';
import { NgModule } from '@angular/core';
import { NgrxFormsModule } from 'ngrx-forms';
import { PasswordStrengthModule } from '@shared/password-strength';

@NgModule({
  declarations: [
    FormPasswordComponent
  ],
  imports: [
    CommonModule,
    NgrxFormsModule,
    PasswordStrengthModule
  ],
  exports: [
    FormPasswordComponent
  ]
})
export class FormPasswordModule { }
