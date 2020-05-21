import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html',
  styleUrls: ['weather.component.scss'],
})
export class WeatherElemComponent implements OnInit {
  public createForm: FormGroup;

  constructor(private weatherService: WeatherService, private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm = this.fb.group({
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.createForm.invalid) {
      return;
    }

    this.weatherService
      .city(this.createForm.get('city').value, this.createForm.get('country').value)
      .subscribe((response) => console.log(response));
  }
}
