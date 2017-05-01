import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-to-do-item',
  templateUrl: 'to-do-item.html'
})
export class ToDoItemPage {

  title;
  description;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {}

  saveItem() {
    let newItem = {
      title: this.title,
      description: this.description
    };

    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }

}
