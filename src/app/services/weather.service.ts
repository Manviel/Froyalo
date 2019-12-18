import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class WeatherService {
  private appId = "6658f4dc774e596256b9254f2868c969";
  private baseUrl = "http://api.openweathermap.org/data/2.5";

  constructor(public http: HttpClient) {}

  city(city: string, country: string) {
    let url = this.baseUrl + "weather";
    url += "?appId=" + this.appId;
    url += "&q=" + city;
    url += "," + country;
    return this.http.get(url);
  }

  forecast(cityId: string, numOfDays: number) {
    let url = this.baseUrl + "forecast/daily";
    url += "?appId=" + this.appId;
    url += "&id=" + cityId;
    url += "&cnt=" + numOfDays;
    return this.http.get(url);
  }

  local(lat: number, lng: number) {
    return this.http.get(
      `${this.baseUrl}/weather?appId=${this.appId}&lat=${lat}&lon=${lng}`
    );
  }
}
