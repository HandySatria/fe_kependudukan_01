import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiayaSekolahRoutingModule } from './biaya-sekolah-routing.module';
import { BiayaSekolahComponent } from './biaya-sekolah.component';


@NgModule({
  declarations: [BiayaSekolahComponent],
  imports: [
    CommonModule,
    BiayaSekolahRoutingModule
  ]
})
export class BiayaSekolahModule { }
