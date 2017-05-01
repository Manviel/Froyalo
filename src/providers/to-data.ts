import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ToData {

  constructor(public storage: Storage) {
    this.storage = new Storage();
  }

  getData() {
    return this.storage.get('todos');
  }

  save(data) {
    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);
  }

}
