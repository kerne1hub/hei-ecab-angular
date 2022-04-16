import { CommonModule } from '@angular/common';
import { FilterSearchComponent } from './filter-search.component';
import { NgModule } from '@angular/core';
import { NgrxFormsModule } from 'ngrx-forms';

@NgModule({
  declarations: [
    FilterSearchComponent
  ],
  imports: [
    CommonModule,
    NgrxFormsModule
  ],
  exports: [
    FilterSearchComponent
  ]
})
export class FilterSearchModule { }
