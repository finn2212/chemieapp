import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterValuesPage } from './enter-values.page';

const routes: Routes = [
  {
    path: '',
    component: EnterValuesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterValuesPageRoutingModule {}
