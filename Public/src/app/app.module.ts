import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services
import { FletesService } from './services/fletes.service';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';

//Routes
import { APP_ROUTING } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


import { FleterosComponent } from './components/user/fleteros/fleteros.component';
import { PublicarComponent } from './components/user/publicar/publicar.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { SearchComponent } from './components/client/search/search.component';
import { ManageComponent } from './components/client/manage/manage.component';
import { ProfileComponent } from './components/client/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';

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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
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
