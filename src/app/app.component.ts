import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Weather } from '../providers/weather';
import { Geolocation } from '@ionic-native/geolocation';
import { StorageService } from '../providers/storage';
import { ToData } from '../providers/to-data';

@Component({
  templateUrl: 'app.html',
  providers: [Weather, Geolocation, StorageService, ToData]
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
