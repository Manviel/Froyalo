import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { AddPage } from '../add/add';
import { ForecastPage } from '../forecast/forecast';

import { Weather } from '../../providers/weather';
import { StorageService } from '../../providers/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  public weatherList = [];
  public localWeather: Object;

  constructor(public modalCtrl: ModalController, public weather: Weather, public navCtrl: NavController, public storage: StorageService) {
    this.getLocalWeather();
    this.getStorageWeather();
  }

  getStorageWeather() {
    this.storage.getWeathers().then(weathers => {
      this.weatherList = JSON.parse(weathers) || [];
    });
  }

  addWeather() {
    let modal = this.modalCtrl.create(AddPage);
    modal.onDidDismiss(data => {
      if (data) this.getWeather(data.city, data.country);
    });
    modal.present();
  }

  getWeather(city: string, country: string) {
    this.weather.city(city, country)
      .map(data => data.json())
      .subscribe(data => {
        this.weatherList.push(data);
        this.storage.setWeathers(data);
      },
        err => console.log(err),
    )
  }

  getLocalWeather() {
    this.weather.local().subscribe(
      data => this.localWeather = data
    )
  }

  viewForecast(cityWeather) {
    this.navCtrl.push(ForecastPage, { cityWeather: cityWeather });
  }

}
