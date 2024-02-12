import { ModalPesertaDidikComponent } from './register/modal-peserta-didik/modal-peserta-didik.component';
import { ModalPengajarComponent } from './register/modal-pengajar/modal-pengajar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    LoginPageComponent,
    ModalPengajarComponent,
    ModalPesertaDidikComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    ReactiveFormsModule
  ],
  exports : [ModalPengajarComponent, ModalPesertaDidikComponent]
})
export class PagesModule {
}
