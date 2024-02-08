import { NotifikasiComponent } from './notifikasi.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotifikasiRoutingModule } from './notifikasi-routing.module';


@NgModule({
  declarations: [NotifikasiComponent],
  imports: [
    CommonModule,
    NotifikasiRoutingModule
  ]
})
export class NotifikasiModule { }
