import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesertaDidikComponent } from './peserta-didik.component';

const routes: Routes = [
  {
    path: '',
    component: PesertaDidikComponent,
    data: {
      title: 'peserta-didik'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesertaDidikRoutingModule { }
