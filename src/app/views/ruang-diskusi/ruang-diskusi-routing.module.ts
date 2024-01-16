import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuangDiskusiComponent } from './ruang-diskusi.component';

const routes: Routes = [
  {
    path: '',
    component: RuangDiskusiComponent,
    data: {
      title: 'ruang-diskusi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuangDiskusiRoutingModule { }
