import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ClienteComponent }  from './components/home/cliente/cliente.component';
import { UsuarioComponent } from './components/home/usuario/usuario.component';
import { FleterosComponent } from './components/user/fleteros/fleteros.component';
import {PerfilComponent} from './components/user/perfil/perfil.component';
import {PublicarComponent} from './components/user/publicar/publicar.component';

const APP_ROUTES: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UsuarioComponent },
  { path: 'client', component: ClienteComponent },
  { path: 'verFleteros', component: FleterosComponent },
  { path: 'perfilUser', component: PerfilComponent },
  { path: 'publicarFlete', component: PublicarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
