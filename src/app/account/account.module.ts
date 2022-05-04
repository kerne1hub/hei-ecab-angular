import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing';
import { RouterModule } from '@angular/router';
import { AccountBadgeModule } from './shared/badge';
import { AccountSidebarModule } from './shared/sidebar';
import { AccountHeaderModule } from './shared/header';
import { ActionsButtonDropdownModule } from '@shared/actions-button-dropdown';
import { StoreModule } from '@ngrx/store';
import { accountReducer } from './shared/store/reducer';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountRoutingModule,
    AccountBadgeModule,
    AccountSidebarModule,
    AccountHeaderModule,
    ActionsButtonDropdownModule,
    StoreModule.forFeature('account', accountReducer),
    ReactiveComponentModule
  ]
})
export class AccountModule { }
