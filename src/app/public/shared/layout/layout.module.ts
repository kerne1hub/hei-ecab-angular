import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicLayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppHeaderModule } from '@shared/app-header';

@NgModule({
  declarations: [
    PublicLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    AppHeaderModule
  ],
  exports: [
    PublicLayoutComponent
  ],
  providers: []
})
export class PublicLayoutModule { }
