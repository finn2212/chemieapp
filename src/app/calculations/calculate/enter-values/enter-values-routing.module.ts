import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterValuesPage } from './enter-values.page';

const routes: Routes = [
  {
    path: '',
    component: EnterValuesPage
  },
  {
    path: 'information-modal',
    loadChildren: () => import('./information-modal/information-modal.module').then( m => m.InformationModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterValuesPageRoutingModule {}
