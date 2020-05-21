import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { HomePage } from './home.page';

import { WeatherService } from '../services/weather.service';
import { TemperaturePipe } from '../pipes/temperature';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
  ],
  declarations: [HomePage, TemperaturePipe],
  providers: [WeatherService, Geolocation],
})
export class HomePageModule {}
