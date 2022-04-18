import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountTaskSortComponent } from './task-sort.component';
import { TranslateModule } from '@ngx-translate/core';
import { CustomSelectModule } from '@shared/custom-select';

@NgModule({
  declarations: [
    AccountTaskSortComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CustomSelectModule
  ],
  providers: [],
  exports: [
    AccountTaskSortComponent
  ]
})
export class AccountTaskSortModule { }
