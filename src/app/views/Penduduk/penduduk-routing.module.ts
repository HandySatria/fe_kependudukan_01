import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendudukPagingComponent } from './penduduk/penduduk-paging.component';
import { TypographyComponent } from './typography.component';
import { PendudukDetailComponent } from './penduduk/penduduk-detail/penduduk-detail.component';
import { KelahiranAsliComponent } from './kelahiran-asli/kelahiran-asli.component';
import { PindahMasukComponent } from './pindah-masuk/pindah-masuk.component';
import { PindahKeluarComponent } from './pindah-keluar/pindah-keluar.component';
import { SudahMeninggalComponent } from './sudah-meninggal/sudah-meninggal.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Penduduk',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'PendudukPaging',
      },
      {
        path: 'PendudukPaging',
        component: PendudukPagingComponent,
        data: {
          title: 'Penduduk Paging',
        },
      },
      {
        path: 'PendudukDetail',
        component: PendudukDetailComponent,
        data: {
          title: 'Penduduk Detail',
        },
      },
      {
        path: 'KelahiranAsli',
        component: KelahiranAsliComponent,
        data: {
          title: 'Penduduk Detail',
        },
      },
      {
        path: 'PindahMasuk',
        component: PindahMasukComponent,
        data: {
          title: 'Penduduk Detail',
        },
      },
      {
        path: 'PindahKeluar',
        component: PindahKeluarComponent,
        data: {
          title: 'Penduduk Detail',
        },
      },
      {
        path: 'SudahMeninggal',
        component: SudahMeninggalComponent,
        data: {
          title: 'Penduduk Detail',
        },
      },
      {
        path: 'LembagaDesa',
        component: TypographyComponent,
        data: {
          title: 'Lembaga Desa',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
