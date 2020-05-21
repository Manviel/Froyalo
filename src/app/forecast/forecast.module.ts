import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TemperaturePipeModule } from '../pipes/temperature-pipe.module';

import { ForecastComponent } from './forecast.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TemperaturePipeModule,
    RouterModule.forChild([
      {
        path: '',
        component: ForecastComponent,
      },
    ]),
  ],
  declarations: [ForecastComponent],
})
export class ForecastModule {}
