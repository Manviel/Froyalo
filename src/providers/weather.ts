import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Weather {
  private appId = '6658f4dc774e596256b9254f2868c969';
  private baseUrl = 'http://api.openweathermap.org/data/2.5/';

  constructor(public http: Http) {
    console.log('Hello Weather Provider');
  }
  city(city: string, country: string) {
    let url = this.baseUrl + 'weather';
    url += '?appId=' + this.appId;
    url += '&q=' + city;
    url += ',' + country;
    return this.http.get(url);
  }
}
