import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatePage } from './calculate.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: CalculatePage,
    children: [
      {
        path: 'enter-values',
        children: [
          {
            path: '',
            loadChildren: () => import('./enter-values/enter-values.module').then(m => m.EnterValuesPageModule)
          }
        ]
      },
      {
        path: 'summary',
        children: [
          {
            path: '',
            loadChildren: () => import('./summary/summary.module').then(m => m.SummaryPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/calculate/tabs/enter-values',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/calculate/tabs/enter-values',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatePageRoutingModule { }
