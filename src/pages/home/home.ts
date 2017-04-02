import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { Weather } from '../../providers/weather';
import 'rxjs/bundles/Rx';
import 'rxjs/add/operator/map';
import { ForecastPage } from '../forecast/forecast';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  public weatherList = [];
  public localWeather: Object;

  constructor(public modalCtrl: ModalController, public weather: Weather, public navCtrl: NavController) {
    this.getLocalWeather();
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

  getLocalWeather() {
    this.weather.local().subscribe(
      data => {
        this.localWeather = data;
      }
    )
  }

  viewForecast(cityWeather) {
    this.navCtrl.push(ForecastPage, {cityWeather: cityWeather});
  }

}
