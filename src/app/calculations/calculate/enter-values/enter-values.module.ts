import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterValuesPageRoutingModule } from './enter-values-routing.module';

import { EnterValuesPage } from './enter-values.page';
import { ComponentsModule } from 'src/app/shared/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterValuesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EnterValuesPage]
})
export class EnterValuesPageModule {}
