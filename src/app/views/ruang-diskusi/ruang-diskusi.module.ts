import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuangDiskusiRoutingModule } from './ruang-diskusi-routing.module';
import { RuangDiskusiComponent } from './ruang-diskusi.component';


@NgModule({
  imports: [
    CommonModule,
    RuangDiskusiRoutingModule
  ],
  declarations: [RuangDiskusiComponent]
})
export class RuangDiskusiModule { }
