import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesComponent } from './tes.component';

const routes: Routes = [ {
  path: '',
  component: TesComponent,
  data: {
    title: 'tes'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesRoutingModule { }
