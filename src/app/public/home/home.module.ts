import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicHomePageComponent } from './home.component';
import { PublicHomePageRoutingModule } from './home.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PublicHomePageFacade } from './home.facade';
import { HomeHeaderModule } from '@shared/home-header';

@NgModule({
  declarations: [
    PublicHomePageComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        PublicHomePageRoutingModule,
        HomeHeaderModule
    ],
  providers: [
    PublicHomePageFacade
  ]
})
export class PublicHomePageModule { }
