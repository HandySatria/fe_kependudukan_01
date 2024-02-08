import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotifikasiComponent } from './notifikasi.component';

const routes: Routes = [
  {
    path: '',
    component: NotifikasiComponent,
    data: {
      title: 'notifikasi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotifikasiRoutingModule { }
