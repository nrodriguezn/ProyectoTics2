import { Routes } from '@angular/router';
import {ActivosComponent} from './activos/activos.component';
import {PorPrecioComponent} from './por-precio/por-precio.component';
import {ProximosComponent} from './proximos/proximos.component';


export const CLIENT_ACTIVE_ROUTES: Routes = [
  { path: 'activos', component: ActivosComponent },
  { path: 'porPrecio', component: PorPrecioComponent },
  { path: 'proximos', component: ProximosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'activos' }
];
