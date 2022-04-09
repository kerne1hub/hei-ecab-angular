import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { DropdownContentFixedDirective } from './dropdown-content-fixed.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    DropdownDirective,
    DropdownContentFixedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownDirective,
    DropdownContentFixedDirective
  ]
})
export class DropdownModule { }
