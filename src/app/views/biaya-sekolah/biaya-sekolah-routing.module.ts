import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiayaSekolahComponent } from './biaya-sekolah.component';

const routes: Routes = [
  {
    path: '',
    component: BiayaSekolahComponent,
    data: {
      title: 'biaya-sekolah'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiayaSekolahRoutingModule { }
