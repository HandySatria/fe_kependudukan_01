import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoinPelanggaranRoutingModule } from './poin-pelanggaran-routing.module';
import { PoinPelanggaranComponent } from './poin-pelanggaran.component';


@NgModule({
  declarations: [PoinPelanggaranComponent],
  imports: [
    CommonModule,
    PoinPelanggaranRoutingModule
  ]
})
export class PoinPelanggaranModule { }
