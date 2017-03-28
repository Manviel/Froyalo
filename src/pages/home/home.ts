import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public weatherList = [];

  constructor(public modalCtrl: ModalController) {
  }

  addWeather() {
    let modal = this.modalCtrl.create(AddPage);
    modal.onDidDismiss( (data) => {
      this.weatherList.push(data);
    });
    modal.present();
  }
}
