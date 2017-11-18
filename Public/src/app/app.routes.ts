import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import {AuthGuardService} from './services/auth-guard.service';

//Usuario Routes

import { FleterosComponent } from './components/user/fleteros/fleteros.component';
import {PerfilComponent} from './components/user/perfil/perfil.component';
import {PublicarComponent} from './components/user/publicar/publicar.component';


//Cliente Routes



//Rutas Extras
import { CLIENT_ROUTES } from './components/client/client.routes';

const APP_ROUTES: Routes = [

  { path: 'home', component: HomeComponent },

  { path: 'verFleteros', component: FleterosComponent, canActivate: [AuthGuardService] },
  { path: 'perfilUser', component: PerfilComponent, canActivate: [AuthGuardService] },
  { path: 'publicarFlete', component: PublicarComponent, canActivate: [AuthGuardService] },
  { path: 'appComponent', component: AppComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
