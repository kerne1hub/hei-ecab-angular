import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppHeaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [],
  exports: [
    AppHeaderComponent
  ]
})
export class AppHeaderModule { }
