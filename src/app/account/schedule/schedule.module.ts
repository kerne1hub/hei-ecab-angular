import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountSchedulePageComponent } from './schedule.component';
import { AccountSchedulePageRoutingModule } from './schedule.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AccountScheduleHeaderComponent } from './shared/components/header/header.component';
import { AccountScheduleLessonCounterComponent } from './shared/components/lesson-counter/lesson-counter.component';
import { AccountScheduleTreeComponent } from './shared/components/tree/tree.component';
import { AccountScheduleNodeComponent } from './shared/components/node/node.component';
import { AccountScheduleLessonComponent } from './shared/components/lesson/lesson.component';
import { AccountScheduleFiltersComponent } from './shared/components/filters/filters.component';
import { FilterSearchModule } from '@shared/filter-search';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgrxFormsModule } from 'ngrx-forms';

@NgModule({
  declarations: [
    AccountSchedulePageComponent,
    AccountScheduleHeaderComponent,
    AccountScheduleLessonCounterComponent,
    AccountScheduleTreeComponent,
    AccountScheduleNodeComponent,
    AccountScheduleLessonComponent,
    AccountScheduleFiltersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    AccountSchedulePageRoutingModule,
    FilterSearchModule,
    ReactiveComponentModule,
    NgrxFormsModule
  ]
})
export class AccountSchedulePageModule { }
