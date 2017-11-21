import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

//Services
import { FletesService } from './services/fletes.service';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';

//Routes
import { APP_ROUTING } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//USUARIO
import { FleterosComponent } from './components/user/fleteros/fleteros.component';
import { PublicarComponent } from './components/user/publicar/publicar.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { SearchComponent } from './components/client/search/search.component';
import { ManageComponent } from './components/client/manage/manage.component';
import { ProfileComponent } from './components/client/profile/profile.component';
import { FiltrarComunaComponent } from './components/client/search/filtrar-comuna/filtrar-comuna.component';
import { VerTodosComponent } from './components/client/search/ver-todos/ver-todos.component';
import { ArchivadoComponent } from './components/client/search/archivado/archivado.component';
import { ProximosComponent } from './components/client/manage/proximos/proximos.component';
import { PorPrecioComponent } from './components/client/manage/por-precio/por-precio.component';
import { SubastasComponent } from './components/client/manage/subastas/subastas.component';
import { ActivosComponent } from './components/client/manage/activos/activos.component';


//CLIENTE



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FleterosComponent,
    PublicarComponent,
    PerfilComponent,
    SearchComponent,
    ManageComponent,
    ProfileComponent,
    NavbarComponent,
    FiltrarComunaComponent,
    VerTodosComponent,
    ArchivadoComponent,
    ProximosComponent,
    PorPrecioComponent,
    SubastasComponent,
    ActivosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    FletesService,
    AuthService,
  AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
