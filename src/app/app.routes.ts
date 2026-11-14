import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((m) => m.Login),
  },
  {
    path: 'productos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./lista-productos/lista-productos').then((m) => m.ListaProductos),
  },
 {
  path: 'mapa',
  loadComponent: () => import('./mapa/mapa').then((m) => m.Mapa),
},

  {
    path: 'contador',
    loadComponent: () => import('./contador/contador').then((m) => m.Contador),
  },
  { path: '**', redirectTo: 'productos' },
];
