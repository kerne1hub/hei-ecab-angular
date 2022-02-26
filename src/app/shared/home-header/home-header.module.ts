import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeHeaderComponent } from './home-header.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomeHeaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    HomeHeaderComponent
  ]
})
export class HomeHeaderModule { }
