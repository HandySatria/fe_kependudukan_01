import { StatusOnlineComponent } from './status-online.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusOnlineRoutingModule } from './status-online-routing.module';


@NgModule({
  declarations: [StatusOnlineComponent],
  imports: [
    CommonModule,
    StatusOnlineRoutingModule
  ]
})
export class StatusOnlineModule { }
