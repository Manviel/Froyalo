import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'temperature' })
export class TemperaturePipe implements PipeTransform {
  transform(value: string) {
    const c = Math.round(parseInt(value, 10) - 273.15);

    return `${c} °C`;
  }
}
