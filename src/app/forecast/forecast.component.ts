import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { WeatherService } from '../services/weather.service';

import { ResponseForecast, Forecast } from '../models/weather';

@Component({
  selector: 'app-forecast',
  templateUrl: 'forecast.component.html',
  styleUrls: ['forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  public createForm: FormGroup;
  public forecasts: Forecast[];

  constructor(
    private weatherService: WeatherService,
    private fb: FormBuilder,
    public toastController: ToastController,
  ) {}

  ngOnInit() {
    this.createForm = this.fb.group({
      city: ['', [Validators.required]],
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
      this.presentToast('Enter city');

      return;
    }

    this.weatherService.forecast(this.createForm.get('city').value, 7).subscribe(
      (response: ResponseForecast) => {
        this.forecasts = response.list;
      },
      (err) => this.presentToast(err.error.message),
    );
  }
}
