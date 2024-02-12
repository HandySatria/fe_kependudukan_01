import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesertaDidikRoutingModule } from './peserta-didik-routing.module';
import { PagesModule } from '../pages/pages.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PesertaDidikRoutingModule,
    PagesModule
  ]
})
export class PesertaDidikModule { }
