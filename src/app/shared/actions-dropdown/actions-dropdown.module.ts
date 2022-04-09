import { ActionsDropdownComponent } from './actions-dropdown.component';
import { CommonModule } from '@angular/common';
import { DropdownModule } from '@shared/dropdown';
import { NgModule } from '@angular/core';
import { NgForTrackByPropertyModule } from '@shared/ng-for-track-by-property';

@NgModule({
  declarations: [
    ActionsDropdownComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    NgForTrackByPropertyModule
  ],
  exports: [
    ActionsDropdownComponent
  ]
})
export class ActionsDropdownModule { }
