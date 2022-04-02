import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountOverviewPageComponent } from './overview.component';
import { AccountOverviewPageRoutingModule } from './overview.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AccountOverviewPageFacade } from './overview.facade';

@NgModule({
  declarations: [
    AccountOverviewPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    AccountOverviewPageRoutingModule
  ],
  providers: [
    AccountOverviewPageFacade
  ]
})
export class AccountOverviewPageModule { }
