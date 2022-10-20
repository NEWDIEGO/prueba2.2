import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocentePagePage } from './docente-page.page';

const routes: Routes = [
  {
    path: '',
    component: DocentePagePage,
    children : [
      {
        path: 'docente-asistencia',
        loadChildren: () => import('./../docente-asistencia/docente-asistencia.module').then( m => m.DocenteAsistenciaPageModule)
      },
      {
        path: 'docente-horario',
        loadChildren: () => import('./../docente-horario/docente-horario.module').then( m => m.DocenteHorarioPageModule)
      },
      {
        path: 'docente-cursos',
        loadChildren: () => import('./../docente-cursos/docente-cursos.module').then( m => m.DocenteCursosPageModule)
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocentePagePageRoutingModule {}
