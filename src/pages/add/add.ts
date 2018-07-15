import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  public data = { country: 'us' };
  
  constructor(public platform: Platform,
    public params: NavParams, public viewCtrl: ViewController) {}

    dismiss(formData) {
      this.viewCtrl.dismiss(formData);
    }
}
