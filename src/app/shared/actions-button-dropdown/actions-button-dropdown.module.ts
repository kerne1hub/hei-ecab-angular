import { ActionsButtonDropdownComponent } from './actions-button-dropdown.component';
import { CommonModule } from '@angular/common';
import { DropdownModule } from '@shared/dropdown';
import { NgModule } from '@angular/core';
import { NgForTrackByPropertyModule } from '@shared/ng-for-track-by-property';
import { NgxTippyModule } from 'ngx-tippy-wrapper';

@NgModule({
  declarations: [
    ActionsButtonDropdownComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    NgForTrackByPropertyModule,
    NgxTippyModule
  ],
  exports: [
    ActionsButtonDropdownComponent
  ]
})
export class ActionsButtonDropdownModule { }
