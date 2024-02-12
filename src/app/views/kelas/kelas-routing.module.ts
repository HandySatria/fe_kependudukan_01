import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KelasComponent } from './kelas.component';

const routes: Routes = [
  {
    path: '',
    component: KelasComponent,
    data: {
      title: 'kelas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KelasRoutingModule { }
