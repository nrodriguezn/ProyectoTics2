import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { APP_ROUTING } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UsuarioComponent } from './components/home/usuario/usuario.component';
import { ClienteComponent } from './components/home/cliente/cliente.component';
import { FooterClientComponent } from './components/shared/footer-client/footer-client.component';
import { FleterosComponent } from './components/user/fleteros/fleteros.component';
import { PublicarComponent } from './components/user/publicar/publicar.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { SearchComponent } from './components/client/search/search.component';
import { ManageComponent } from './components/client/manage/manage.component';
import { ProfileComponent } from './components/client/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    UsuarioComponent,
    ClienteComponent,
    FooterClientComponent,
    FleterosComponent,
    PublicarComponent,
    PerfilComponent,
    SearchComponent,
    ManageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
