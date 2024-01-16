import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriRoutingModule } from './materi-routing.module';
import { MateriComponent } from './materi.component';


@NgModule({
  declarations: [MateriComponent],
  imports: [
    CommonModule,
    MateriRoutingModule
  ]
})
export class MateriModule { }
