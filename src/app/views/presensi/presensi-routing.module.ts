import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresensiComponent } from './presensi.component';

const routes: Routes = [
  {
    path: '',
    component: PresensiComponent,
    data: {
      title: 'presensi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresensiRoutingModule { }
