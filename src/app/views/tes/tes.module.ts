import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesRoutingModule } from './tes-routing.module';
import { TesComponent } from './tes.component';


@NgModule({
  declarations: [TesComponent],
  imports: [
    CommonModule,
    TesRoutingModule
  ]
})
export class TesModule { }
