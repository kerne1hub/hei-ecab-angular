import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicLogInPageComponent } from './log-in.component';
import { PublicLogInPageRoutingModule } from './log-in.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppHeaderModule } from '@shared/app-header';
import { ReactiveComponentModule } from '@ngrx/component';
import { PublicLayoutModule } from '@app/public/shared/layout';
import { FormTextModule } from '@shared/form-text';
import { NgrxFormsModule } from 'ngrx-forms';
import { FormPasswordModule } from '@shared/form-password';

@NgModule({
  declarations: [
    PublicLogInPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PublicLogInPageRoutingModule,
    AppHeaderModule,
    ReactiveComponentModule,
    PublicLayoutModule,
    FormTextModule,
    NgrxFormsModule,
    FormPasswordModule
  ],
  providers: []
})
export class PublicLogInPageModule { }
