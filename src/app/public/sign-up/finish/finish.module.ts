import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicSignUpFinishPageComponent } from './finish.component';
import { PublicSignUpFinishPageRoutingModule } from './finish.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PublicSignUpFinishPageFacade } from './finish.facade';
import { PublicLayoutModule } from '../../shared/layout';

@NgModule({
  declarations: [
    PublicSignUpFinishPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PublicSignUpFinishPageRoutingModule,
    PublicLayoutModule
  ],
  providers: [
    PublicSignUpFinishPageFacade
  ]
})
export class PublicSignUpFinishPageModule { }
