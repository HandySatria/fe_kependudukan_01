import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TugasComponent } from './tugas.component';

const routes: Routes = [ {
  path: '',
  component: TugasComponent,
  data: {
    title: 'tugas'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TugasRoutingModule { }
