import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PengajarRoutingModule } from './pengajar-routing.module';
import { PagesModule } from '../pages/pages.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PengajarRoutingModule,
    PagesModule
  ]
})
export class PengajarModule { }
