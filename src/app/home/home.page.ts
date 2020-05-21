import { Component } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { WeatherService } from '../services/weather.service';
import { LocalWeather } from '../models/weather';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.component.scss'],
})
export class HomePage {
  public localWeather: LocalWeather;

  constructor(private weatherService: WeatherService, private geolocation: Geolocation) {
    this.getLocalWeather();
  }

  getLocalWeather() {
    this.geolocation
      .getCurrentPosition()
      .then((response) => {
        const lat = response.coords.latitude;
        const lng = response.coords.longitude;

        this.weatherService.local(lat, lng).subscribe((data: LocalWeather) => {
          this.localWeather = data;
        });
      })
      .catch((error) => console.log(error));
  }
}
