import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { WeatherService } from '../services/weather.service';

import { LocalWeather } from '../models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: 'weather.html',
  styleUrls: ['weather.component.scss'],
})
export class WeatherElemComponent implements OnInit {
  public createForm: FormGroup;
  public localWeather: LocalWeather;

  constructor(
    private weatherService: WeatherService,
    private fb: FormBuilder,
    public toastController: ToastController,
  ) {}

  ngOnInit() {
    this.createForm = this.fb.group({
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });

    toast.present();
  }

  onSubmit() {
    if (this.createForm.invalid) {
      this.presentToast('Enter city and country');

      return;
    }

    this.weatherService
      .city(this.createForm.get('city').value, this.createForm.get('country').value)
      .subscribe(
        (response: LocalWeather) => {
          this.localWeather = response;
        },
        (err) => this.presentToast(err.error.message),
      );
  }
}
