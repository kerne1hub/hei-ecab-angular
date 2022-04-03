import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountHeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { AccountBadgeModule } from '../badge';

@NgModule({
  declarations: [
    AccountHeaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    AccountBadgeModule
  ],
  exports: [
    AccountHeaderComponent
  ]
})
export class AccountHeaderModule { }
