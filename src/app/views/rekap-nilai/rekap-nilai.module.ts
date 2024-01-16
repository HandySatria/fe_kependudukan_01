import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RekapNilaiRoutingModule } from './rekap-nilai-routing.module';
import { RekapNilaiComponent } from './rekap-nilai.component';


@NgModule({
  declarations: [RekapNilaiComponent],
  imports: [
    CommonModule,
    RekapNilaiRoutingModule
  ]
})
export class RekapNilaiModule { }
