import { 
  Routes
} from '@angular/router';

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
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'supermercato',
    loadComponent: () => import('./supermercato/supermercato.page').then( m => m.SupermercatoPage)
  },
  {
    path: 'dashboard-admin',
    loadComponent: () => import('./dashboard-admin/dashboard-admin.page').then( m => m.DashboardAdminPage)
  },
  {
    path: 'dashboard-manager',
    loadComponent: () => import('./dashboard-manager/dashboard-manager.page').then( m => m.DashboardManagerPage)
  },
  {
    path: 'dashboard-customer',
    loadComponent: () => import('./dashboard-customer/dashboard-customer.page').then( m => m.DashboardCustomerPage)
  }
];