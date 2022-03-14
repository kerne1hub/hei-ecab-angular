import { PublicSignUpPageComponent } from './sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PublicSignUpPageComponent
  },
  {
    path: 'confirm',
    loadChildren: () => import('./confirm/confirm.module').then((module) => module.PublicSignUpConfirmPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicSignUpPageRoutingModule { }
