import { NgModule } from '@angular/core';
import { PesanComponent } from './pesan.component';
import { CommonModule } from '@angular/common';

import { PesanRoutingModule } from './pesan-routing.module';


@NgModule({
  declarations: [PesanComponent],
  imports: [
    CommonModule,
    PesanRoutingModule
  ]
})
export class PesanModule { }
