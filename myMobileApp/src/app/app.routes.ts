import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./rewrite/rewrite.page').then((m) => m.RewritePage),
  },
];
