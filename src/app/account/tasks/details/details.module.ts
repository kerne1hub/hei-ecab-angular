import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountTasksDetailsPageComponent } from './details.component';
import { AccountTasksDetailsPageRoutingModule } from './details.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AccountTasksDetailsHeaderComponent } from './shared/components/header/header.component';
import { AccountTasksDetailsMetaComponent } from './shared/components/meta/meta.component';
import { AccountTaskStatusModule } from '@app/account/shared/task-status';
import { AccountTasksDetailsContentComponent } from './shared/components/content/content.component';
import { AccountTasksDetailsTimelineComponent } from './shared/components/timeline/timeline.component';
import { AccountTasksDetailsTimelineEntryComponent } from './shared/components/timeline-entry/timeline-entry.component';
import { AccountBadgeModule } from '@app/account/shared/badge';
import { AccountTasksDetailsCommentFormComponent } from './shared/components/comment-form/comment-form.component';
import { FormTextareaModule } from '@shared/form-textarea';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgrxFormsModule } from 'ngrx-forms';

@NgModule({
  declarations: [
    AccountTasksDetailsPageComponent,
    AccountTasksDetailsHeaderComponent,
    AccountTasksDetailsMetaComponent,
    AccountTasksDetailsContentComponent,
    AccountTasksDetailsTimelineComponent,
    AccountTasksDetailsTimelineEntryComponent,
    AccountTasksDetailsCommentFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    AccountTasksDetailsPageRoutingModule,
    AccountTaskStatusModule,
    AccountBadgeModule,
    FormTextareaModule,
    ReactiveComponentModule,
    NgrxFormsModule
  ]
})
export class AccountTasksDetailsPageModule { }
