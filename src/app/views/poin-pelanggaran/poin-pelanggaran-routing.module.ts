import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoinPelanggaranComponent } from './poin-pelanggaran.component';

const routes: Routes = [
  {
    path: '',
    component: PoinPelanggaranComponent,
    data: {
      title: 'poin-pelanggaran'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoinPelanggaranRoutingModule { }
