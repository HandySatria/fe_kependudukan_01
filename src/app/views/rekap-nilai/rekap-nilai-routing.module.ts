import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RekapNilaiComponent } from './rekap-nilai.component';

const routes: Routes = [
  {
    path: '',
    component: RekapNilaiComponent,
    data: {
      title: 'rekap-nilai'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RekapNilaiRoutingModule { }
