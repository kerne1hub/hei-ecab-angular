import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicSignUpPageComponent } from './sign-up.component';
import { PublicSignUpPageRoutingModule } from './sign-up.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PublicLayoutModule } from '../shared/layout';
import { FormTextModule } from '@shared/form-text';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgrxFormsModule } from 'ngrx-forms';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    PublicSignUpPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PublicSignUpPageRoutingModule,
    PublicLayoutModule,
    FormTextModule,
    ReactiveComponentModule,
    NgrxFormsModule,
    NgxCaptchaModule
  ],
  providers: []
})
export class PublicSignUpPageModule { }
