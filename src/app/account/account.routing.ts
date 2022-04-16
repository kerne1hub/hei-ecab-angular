import { AccountComponent } from './account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'overview',
        loadChildren: () => import('./overview/overview.module').then((module) => module.AccountOverviewPageModule)
      },
      {
        path: 'personal',
        loadChildren: () => import('./personal/personal.module').then((module) => module.AccountPersonalPageModule)
      },
      {
        path: 'schedule',
        loadChildren: () => import('./schedule/schedule.module').then((module) => module.AccountSchedulePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
