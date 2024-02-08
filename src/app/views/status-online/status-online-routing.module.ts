import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusOnlineComponent } from './status-online.component';

const routes: Routes = [
  {
    path: '',
    component: StatusOnlineComponent,
    data: {
      title: 'status-online'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusOnlineRoutingModule { }
