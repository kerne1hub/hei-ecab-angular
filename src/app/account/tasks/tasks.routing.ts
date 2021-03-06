import { AccountTasksPageComponent } from './tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AccountTasksPageComponent
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then((module) => module.AccountTasksDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountTasksPageRoutingModule { }
