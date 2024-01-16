import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresensiRoutingModule } from './presensi-routing.module';
import { PresensiComponent } from './presensi.component';


@NgModule({
  declarations: [PresensiComponent],
  imports: [
    CommonModule,
    PresensiRoutingModule
  ]
})
export class PresensiModule { }
