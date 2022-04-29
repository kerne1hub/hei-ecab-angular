import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountTasksDetailsPageComponent } from './details.component';
import { AccountTasksDetailsPageRoutingModule } from './details.routing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AccountTasksDetailsPageFacade } from './details.facade';
import { AccountTasksDetailsHeaderComponent } from './shared/components/header/header.component';
import { AccountTasksDetailsMetaComponent } from './shared/components/meta/meta.component';
import { AccountTaskStatusModule } from '@app/account/shared/task-status';
import { AccountTasksDetailsContentComponent } from './shared/components/content/content.component';

@NgModule({
  declarations: [
    AccountTasksDetailsPageComponent,
    AccountTasksDetailsHeaderComponent,
    AccountTasksDetailsMetaComponent,
    AccountTasksDetailsContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    AccountTasksDetailsPageRoutingModule,
    AccountTaskStatusModule
  ],
  providers: [
    AccountTasksDetailsPageFacade
  ]
})
export class AccountTasksDetailsPageModule { }
