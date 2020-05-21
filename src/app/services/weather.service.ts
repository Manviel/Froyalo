import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private baseUrl = 'http://api.openweathermap.org/data/2.5/';

  constructor(public http: HttpClient) {}

  city(city: string, country: string) {
    let url = this.baseUrl + 'weather';

    url += '?appId=' + environment.APP_KEY;
    url += '&q=' + city;
    url += ',' + country;

    return this.http.get(url);
  }

  forecast(cityName: string, numOfDays: number) {
    let url = this.baseUrl + 'forecast/daily';

    url += '?appId=' + environment.APP_KEY;
    url += '&q=' + cityName;
    url += '&cnt=' + numOfDays;

    return this.http.get(url);
  }

  local(lat: number, lng: number) {
    return this.http.get(
      `${this.baseUrl}/weather?appId=${environment.APP_KEY}&lat=${lat}&lon=${lng}`,
    );
  }
}
