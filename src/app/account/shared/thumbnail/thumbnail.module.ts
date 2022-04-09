import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountThumbnailComponent } from './thumbnail.component';
import { ImageLoaderModule } from '@shared/image-loader';

@NgModule({
  declarations: [
    AccountThumbnailComponent
  ],
  imports: [
    CommonModule,
    ImageLoaderModule
  ],
  exports: [
    AccountThumbnailComponent
  ]
})
export class AccountThumbnailModule { }
