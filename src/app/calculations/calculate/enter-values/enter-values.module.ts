import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterValuesPageRoutingModule } from './enter-values-routing.module';

import { EnterValuesPage } from './enter-values.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterValuesPageRoutingModule
  ],
  declarations: [EnterValuesPage]
})
export class EnterValuesPageModule {}
