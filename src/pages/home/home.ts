import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { Weather } from '../../providers/weather';
import 'rxjs/bundles/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Weather]
})

export class HomePage {
  public weatherList = [];

  constructor(public modalCtrl: ModalController, public weather: Weather) {
  }

  addWeather() {
    let modal = this.modalCtrl.create(AddPage);
    modal.onDidDismiss( (data) => {
      if (data) {
        this.getWeather(data.city, data.country);
      }
    });
    modal.present();
  }

  getWeather(city: string, country: string) {
    // get from API
    this.weather.city(city, country)
      .map(data => data.json())
      .subscribe(data => {
        this.weatherList.push(data);
      },
    err => console.log(err),
    () => console.log('get'))
  }

  viewForecast(cityWeather) {
    console.log('view forecast');
  }

}
