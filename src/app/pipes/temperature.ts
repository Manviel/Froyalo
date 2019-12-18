import { Injectable, Pipe } from "@angular/core";

@Pipe({
  name: "temperature"
})
@Injectable({ providedIn: "root" })
export class TemperaturePipe {
  transform(value: string, args: any[]) {
    const c = Math.round(parseInt(value, 10) - 273.15);

    return `${c} °C`;
  }
}
