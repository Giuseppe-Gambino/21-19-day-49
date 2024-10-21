import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiSiamoComponent } from './chi-siamo.component';
import { ChisiamoRoutingModule } from './chi-siamo-routing.module';

@NgModule({
  declarations: [ChiSiamoComponent],
  imports: [CommonModule, ChisiamoRoutingModule],
})
export class ChiSiamoModule {}
