import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AkunComponent } from './akun/akun.component';


@NgModule({
  declarations: [ProfileComponent, AkunComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  exports : [AkunComponent]
})
export class ProfileModule {}
