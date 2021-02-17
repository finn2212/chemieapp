import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Calc1Component } from '../calculations/calculate/enter-values/calc1/calc1.component';
import { Calc2Component } from '../calculations/calculate/enter-values/calc2/calc2.component';
import { Calc3Component } from '../calculations/calculate/enter-values/calc3/calc3.component';
const routes: Routes = [
  {
    path: 'calc1',
    component: Calc1Component
  },
  {
    path: 'calc2',
    component: Calc1Component
  },
  {
    path: 'calc3',
    component: Calc1Component
  }

];

@NgModule({
  declarations: [ Calc1Component, Calc2Component,Calc3Component],
  imports: [
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [Calc1Component,Calc2Component,Calc3Component]
})
export class ComponentsModule { }