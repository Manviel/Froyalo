import { Component } from "@angular/core";

import { Geolocation } from "@ionic-native/geolocation/ngx";

import { WeatherService } from "../services/weather.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public localWeather: Object;

  constructor(
    private weatherService: WeatherService,
    private geolocation: Geolocation
  ) {
    this.getLocalWeather();
  }

  getLocalWeather() {
    this.geolocation
      .getCurrentPosition()
      .then(response => {
        let lat = response.coords.latitude;
        let lng = response.coords.longitude;

        this.weatherService
          .local(lat, lng)
          .subscribe(data => (this.localWeather = data));
      })
      .catch(error => console.log(error));
  }
}
