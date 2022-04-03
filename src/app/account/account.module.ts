import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing';
import { RouterModule } from '@angular/router';
import { AccountBadgeModule } from './shared/badge';
import { AccountSidebarModule } from './shared/sidebar';
import { AccountHeaderModule } from './shared/header';

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
    AccountHeaderModule
  ]
})
export class AccountModule { }
