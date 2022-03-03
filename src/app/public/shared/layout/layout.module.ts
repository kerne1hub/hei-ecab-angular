import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicLayoutPageComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PublicLayoutPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  providers: []
})
export class PublicLayoutPageModule { }
