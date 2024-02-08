import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesanComponent } from './pesan.component';

const routes: Routes = [
  {
    path: '',
    component: PesanComponent,
    data: {
      title: 'pesan'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesanRoutingModule { }
