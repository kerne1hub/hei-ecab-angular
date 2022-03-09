import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((module) => module.PublicHomePageModule)
      },
      {
        path: 'log-in',
        loadChildren: () => import('./log-in/log-in.module').then((module) => module.PublicLogInPageModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('./sign-up/sign-up.module').then((module) => module.PublicSignUpPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
