import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountTasksPageComponent } from './tasks.component';
import { AccountTasksPageRoutingModule } from './tasks.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AccountTasksHeaderComponent } from './shared/components/header/header.component';
import { AccountTasksTabsComponent } from './shared/components/tabs/tabs.component';
import { AccountBadgeModule } from '@app/account/shared/badge';
import { AccountTasksFiltersComponent } from './shared/components/filters/filters.component';
import { FilterSearchModule } from '@shared/filter-search';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgrxFormsModule } from 'ngrx-forms';
import { AccountTaskSortModule } from '@app/account/shared/task-sort';

@NgModule({
  declarations: [
    AccountTasksPageComponent,
    AccountTasksHeaderComponent,
    AccountTasksTabsComponent,
    AccountTasksFiltersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    AccountTasksPageRoutingModule,
    AccountBadgeModule,
    FilterSearchModule,
    ReactiveComponentModule,
    NgrxFormsModule,
    AccountTaskSortModule
  ]
})
export class AccountTasksPageModule { }
