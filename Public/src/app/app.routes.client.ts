import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent }  from './components/home/cliente/cliente.component';


const APP_ROUTES: Routes = [

  { path: 'client', component: ClienteComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'client' }
];

export const APP_ROUTING_CLIENT = RouterModule.forRoot(APP_ROUTES);
