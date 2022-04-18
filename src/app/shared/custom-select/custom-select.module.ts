import { CommonModule } from '@angular/common';
import { CustomSelectComponent } from './custom-select.component';
import { DropdownModule } from '@shared/dropdown';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgModule } from '@angular/core';
import { NgrxFormsModule } from 'ngrx-forms';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingSpinnerModule } from '@shared/loading-spinner';
import { ValidationErrorsModule } from '@shared/validation-errors';
import { NgForTrackByPropertyModule } from '@shared/ng-for-track-by-property';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    DropdownModule,
    NgrxFormsModule,
    InfiniteScrollModule,
    LoadingSpinnerModule,
    ValidationErrorsModule,
    NgForTrackByPropertyModule
  ],
  declarations: [
    CustomSelectComponent
  ],
  exports: [
    CustomSelectComponent
  ]
})
export class CustomSelectModule { }
