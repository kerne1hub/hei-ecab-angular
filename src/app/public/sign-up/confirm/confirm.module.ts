import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicSignUpConfirmPageComponent } from './confirm.component';
import { PublicSignUpConfirmPageRoutingModule } from './confirm.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PublicLayoutModule } from '@app/public/shared/layout';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgrxFormsModule } from 'ngrx-forms';
import { FormTextModule } from '@shared/form-text';
import { FormCheckboxModule } from '@shared/form-checkbox';

@NgModule({
  declarations: [
    PublicSignUpConfirmPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PublicSignUpConfirmPageRoutingModule,
    PublicLayoutModule,
    ReactiveComponentModule,
    NgrxFormsModule,
    FormTextModule,
    FormCheckboxModule
  ],
  providers: []
})
export class PublicSignUpConfirmPageModule { }
