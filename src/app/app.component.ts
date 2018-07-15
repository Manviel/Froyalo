import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { HomePage } from '../pages/home/home';

import { Weather } from '../providers/weather';
import { StorageService } from '../providers/storage';

@Component({
  templateUrl: 'app.html',
  providers: [Weather, Geolocation, StorageService]
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
