import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountSidebarComponent } from './sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { AccountBadgeModule } from '../badge';

@NgModule({
  declarations: [
    AccountSidebarComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    AccountBadgeModule
  ],
  exports: [
    AccountSidebarComponent
  ]
})
export class AccountSidebarModule { }
