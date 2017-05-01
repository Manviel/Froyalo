import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPage } from '../pages/add/add';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TemperaturePipe } from '../pipes/temperature';
import { ForecastPage } from '../pages/forecast/forecast';
import { WeatherElem } from '../components/weather/weather';
import { IonicStorageModule } from '@ionic/storage';
import { ToDoItemPage } from '../pages/to-do-item/to-do-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage,
    TemperaturePipe,
    ForecastPage,
    WeatherElem,
    ToDoItemPage,
    ItemDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage,
    ForecastPage,
    ToDoItemPage,
    ItemDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
