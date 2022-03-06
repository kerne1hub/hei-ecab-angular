import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PasswordStrengthComponent } from './password-strength.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgForTrackByPropertyModule } from '@shared/ng-for-track-by-property';

@NgModule({
  declarations: [
    PasswordStrengthComponent
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    TranslateModule,
    NgForTrackByPropertyModule
  ],
  exports: [
    PasswordStrengthComponent
  ]
})
export class PasswordStrengthModule { }
