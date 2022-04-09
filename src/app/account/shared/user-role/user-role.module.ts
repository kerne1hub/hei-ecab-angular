import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountUserRoleComponent } from './user-role.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AccountUserRoleComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    AccountUserRoleComponent
  ]
})
export class AccountUserStatusModule { }
