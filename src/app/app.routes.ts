import { 
  Routes,
  RouterModule 
} from '@angular/router';

import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home-admin/home.page').then((m) => m.HomePage),
  },
  {
    path: 'supermercato',
    loadComponent: () => import('./supermercato/supermercato.page').then( m => m.SupermercatoPage)
  }
];