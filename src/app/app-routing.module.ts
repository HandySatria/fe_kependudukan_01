import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { LoginPageComponent } from './views/pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate : [AuthGuard],
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
        import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'pesan',
        loadChildren: () =>
        import('./views/pesan/pesan.module').then((m) => m.PesanModule)
      },
      {
        path: 'notifikasi',
        loadChildren: () =>
        import('./views/notifikasi/notifikasi.module').then((m) => m.NotifikasiModule)
      },
      {
        path: 'status-online',
        loadChildren: () =>
        import('./views/status-online/status-online.module').then((m) => m.StatusOnlineModule)
      },
      {
        path: 'profile',
        loadChildren: () =>
        import('./views/profile/profile.module').then((m) => m.ProfileModule)
      },
      {
        path: 'ruang-diskusi',
        loadChildren: () =>
        import('./views/ruang-diskusi/ruang-diskusi.module').then((m) => m.RuangDiskusiModule)
      },
      {
        path: 'materi',
        loadChildren: () =>
        import('./views/materi/materi.module').then((m) => m.MateriModule)
      },
      {
        path: 'tugas',
        loadChildren: () =>
        import('./views/tugas/tugas.module').then((m) => m.TugasModule)
      },
      {
        path: 'tes',
        loadChildren: () =>
        import('./views/tes/tes.module').then((m) => m.TesModule)
      },
      {
        path: 'rekap-nilai',
        loadChildren: () =>
        import('./views/rekap-nilai/rekap-nilai.module').then((m) => m.RekapNilaiModule)
      },
      {
        path: 'presensi',
        loadChildren: () =>
        import('./views/presensi/presensi.module').then((m) => m.PresensiModule)
      },
      {
        path: 'poin-pelanggaran',
        loadChildren: () =>
        import('./views/poin-pelanggaran/poin-pelanggaran.module').then((m) => m.PoinPelanggaranModule)
      },
      {
        path: 'biaya-sekolah',
        loadChildren: () =>
        import('./views/biaya-sekolah/biaya-sekolah.module').then((m) => m.BiayaSekolahModule)
      },
      {
        path: 'Penduduk',
        loadChildren: () =>
        import('./views/Penduduk/penduduk.module').then((m) => m.PendudukModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
