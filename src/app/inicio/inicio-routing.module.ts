import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'horario',
        children: [
          {
            path: '',
            loadChildren: () => import('../inicio/horario/horario.module').then(m => m.HorarioPageModule)

          }
        ]
      },
      {
        path: 'QR',
        children: [
          {
            path: '',
            loadChildren: () => import('../inicio/qr/qr.module').then(m => m.QRPageModule)

          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () => import('../inicio/perfil/perfil.module').then(m => m.PerfilPageModule)

          }
        ]
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
