import { LoadingSpinnerComponent } from './loading-spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgProgressModule } from 'ngx-progressbar';
import { configuration } from '@configurations';

@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    NgProgressModule.withConfig(configuration.ngxProgress),
    MatProgressSpinnerModule
  ],
  exports: [
    LoadingSpinnerComponent
  ]
})
export class LoadingSpinnerModule { }
