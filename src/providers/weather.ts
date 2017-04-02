import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Weather {
  private appId = '6658f4dc774e596256b9254f2868c969';
  private baseUrl = 'http://api.openweathermap.org/data/2.5/';

  constructor(public http: Http, private geolocation: Geolocation) {
    console.log('Hello Weather Provider');
  }
  city(city: string, country: string) {
    let url = this.baseUrl + 'weather';
    url += '?appId=' + this.appId;
    url += '&q=' + city;
    url += ',' + country;
    return this.http.get(url);
  }

  forecast(cityId: string, numOfDays: number) {
    let url = this.baseUrl + 'forecast/daily';
    url += '?appId=' + this.appId;
    url += '&id=' + cityId;
    url += '&cnt=' + numOfDays;
    return this.http.get(url);
  }

  local() {
    let Obs = Observable.create(observer => {

      this.geolocation.getCurrentPosition().then((resp => {
        let lat = resp.coords.latitude;
        let lng = resp.coords.longitude;

        let url = this.baseUrl + 'weather';
        url += '?appId=' + this.appId;
        url += `&lat=${lat}&lon=${lng}`;
        this.http.get(url)
          .subscribe(data => {
            observer.next(data.json());
          },
        err => observer.error(err),
        () => observer.complete())
      }))
    })
    return Obs;
  }
}
