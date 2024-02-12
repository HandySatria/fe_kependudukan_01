import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PengajarComponent } from './pengajar.component';


const routes: Routes = [
  {
    path: '',
    component: PengajarComponent,
    data: {
      title: 'pengajar'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PengajarRoutingModule { }
