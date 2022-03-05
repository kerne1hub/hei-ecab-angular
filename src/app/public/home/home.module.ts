import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicHomePageComponent } from './home.component';
import { PublicHomePageRoutingModule } from './home.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PublicHomePageFacade } from './home.facade';
import { HomeHeaderModule } from '@shared/home-header';
import { PublicHomeRegisterLinkComponent } from './shared/components/register-link/register-link.component';
import { PublicHomeFeaturesComponent } from './shared/components/features/features.component';
import { PublicHomeNewsComponent } from './shared/components/news/news.component';
import { PublicHomeSocialComponent } from './shared/components/social/social.component';

@NgModule({
  declarations: [
    PublicHomePageComponent,
    PublicHomeRegisterLinkComponent,
    PublicHomeFeaturesComponent,
    PublicHomeNewsComponent,
    PublicHomeSocialComponent
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
