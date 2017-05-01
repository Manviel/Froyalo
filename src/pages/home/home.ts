import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { Weather } from '../../providers/weather';
import 'rxjs/bundles/Rx';
import 'rxjs/add/operator/map';
import { ForecastPage } from '../forecast/forecast';
import { NavController } from 'ionic-angular';
import { StorageService } from '../../providers/storage';
import { ToDoItemPage } from '../to-do-item/to-do-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { ToData } from '../../providers/to-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  pages: string = 'weather, todo';
  public items = [];

  public weatherList = [];
  public localWeather: Object;

  constructor(public modalCtrl: ModalController, public weather: Weather, public navCtrl: NavController, public storage: StorageService, public dataService: ToData) {
    this.getLocalWeather();
    this.getStorageWeather();
    this.dataService.getData().then((todos) => {
      if(todos) {
        this.items = JSON.parse(todos);
      }
    });
  }

  getStorageWeather() {
    this.storage.getWeathers().then((weathers) => {
      this.weatherList = JSON.parse(weathers) || [];
    });
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
    // берем с API
    this.weather.city(city, country)
      .map(data => data.json())
      .subscribe(data => {
        this.weatherList.push(data);
        this.storage.setWeathers(data);
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

  addItem() {
    let addModal = this.modalCtrl.create(ToDoItemPage);
    addModal.onDidDismiss((item) => {
      if(item) {
        this.saveItem(item);
      }
    });
    addModal.present();
  }

  saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

}
