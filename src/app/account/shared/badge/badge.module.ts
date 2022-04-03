import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountBadgeComponent } from './badge.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AccountBadgeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    AccountBadgeComponent
  ]
})
export class AccountBadgeModule { }
