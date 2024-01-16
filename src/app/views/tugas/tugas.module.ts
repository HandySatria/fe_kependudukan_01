import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TugasRoutingModule } from './tugas-routing.module';
import { TugasComponent } from './tugas.component';


@NgModule({
  declarations: [TugasComponent],
  imports: [
    CommonModule,
    TugasRoutingModule
  ]
})
export class TugasModule { }
