import { Routes } from '@angular/router';
import {ArchivadoComponent} from './archivado/archivado.component';
import {FiltrarComunaComponent} from './filtrar-comuna/filtrar-comuna.component';
import {VerTodosComponent} from './ver-todos/ver-todos.component';


export const CLIENT_SEARCH_ROUTES: Routes = [
  { path: 'archivado', component: ArchivadoComponent },
  { path: 'filtroComuna', component: FiltrarComunaComponent },
  { path: 'verTodos', component: VerTodosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'verTodos' }
];
