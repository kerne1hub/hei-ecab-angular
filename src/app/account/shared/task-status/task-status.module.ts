import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountTaskStatusComponent } from './task-status.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AccountTaskStatusComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    AccountTaskStatusComponent
  ]
})
export class AccountTaskStatusModule { }
