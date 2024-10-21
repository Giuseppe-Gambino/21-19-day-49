import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContattiComponent } from './contatti.component';
import { ContattiRoutingModule } from './contatti-routing.module';

@NgModule({
  declarations: [ContattiComponent],
  imports: [CommonModule, ContattiRoutingModule],
})
export class ContattiModule {}
