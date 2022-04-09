import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountPersonalPageComponent } from './personal.component';
import { AccountPersonalPageRoutingModule } from './personal.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AccountThumbnailModule } from '@app/account/shared/thumbnail';
import { AccountPersonalHeaderComponent } from './shared/components/header/header.component';
import { AccountUserStatusModule } from '@app/account/shared/user-role';

@NgModule({
  declarations: [
    AccountPersonalPageComponent,
    AccountPersonalHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    AccountPersonalPageRoutingModule,
    AccountThumbnailModule,
    AccountUserStatusModule
  ]
})
export class AccountPersonalPageModule { }
