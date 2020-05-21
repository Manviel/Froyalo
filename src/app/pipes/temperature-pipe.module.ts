import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemperaturePipe } from './temperature.pipe';

@NgModule({
  declarations: [TemperaturePipe],
  providers: [TemperaturePipe],
  exports: [TemperaturePipe],
  imports: [CommonModule],
})
export class TemperaturePipeModule {}
