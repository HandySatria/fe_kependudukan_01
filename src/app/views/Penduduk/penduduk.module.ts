import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule, FormModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { PendudukPagingComponent } from './penduduk/penduduk-paging.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './penduduk-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PendudukDetailComponent } from './penduduk/penduduk-detail/penduduk-detail.component';
import { KelahiranAsliComponent } from './kelahiran-asli/kelahiran-asli.component';
import { PindahMasukComponent } from './pindah-masuk/pindah-masuk.component';
import { PindahKeluarComponent } from './pindah-keluar/pindah-keluar.component';
import { SudahMeninggalComponent } from './sudah-meninggal/sudah-meninggal.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    FormModule,
    ReactiveFormsModule
  ],
  declarations: [
    PendudukPagingComponent,
    PendudukDetailComponent,
    TypographyComponent,
    PendudukDetailComponent,
    KelahiranAsliComponent,
    PindahMasukComponent,
    PindahKeluarComponent,
    SudahMeninggalComponent,
  ]
})
export class PendudukModule {
}
