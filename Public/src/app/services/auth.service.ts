// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import {FletesService} from './fletes.service';



@Injectable()
export class AuthService {

  public userProfile:any


  auth0 = new auth0.WebAuth({
    clientID: 'ZX2d1TOZdN5fqJiybZu5p3pXO1HWgL4H',
    domain: 'nico-app.auth0.com',
    responseType: 'token id_token',
    audience: 'https://nico-app.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  });

  constructor(public router: Router, public _fletesService:FletesService) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.setFletesAppSesion();
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    console.log("setSesion")
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public setFletesAppSesion(){  //guarda informacion se la sesion en la bdd de la api
    console.log("setFletesApp")
     const accessToken = localStorage.getItem('access_token');
     if (!accessToken) {
       throw new Error('Access token must exist to fetch profile');
     }
     this.auth0.client.userInfo(accessToken, (err, profile) => {
       if (!profile) {
         throw new Error ('No existe profile')
       }else{
          console.log("viene getProfileSesion")
          this.userProfile = profile
          //verifica si existe en la base de datos
          this._fletesService.getProfileSesion(profile.sub)
          .subscribe(profile_ =>{
            this.userProfile = profile_
            console.log(this.userProfile)
          }, error => {
            console.log("No existe userType, actualizando")
            this.setUserMetadata(this.userProfile, this.userProfile, false)
              }
            )
          }
        })
      }

      //pregunto en la api si existe alguien con ese dato.
      //si existe, es por que ya esta inscrito y se continua por guardar variables de la setSession
      //si no, se guardan datos en bdd y en fletes.service




  public setUserMetadata(user, context, callback){
    if(user){
      user.app_metadata = user.app_metadata || {};
    }
      // update the app_metadata that will be part of the response
      user.app_metadata.userType = user.app_metadata.userType || [];
      user.app_metadata.userType.push('usuario');
      // persist the app_metadata update
      console.log(user.sub, user.app_metadata)
      auth0.users.updateAppMetadata(user.user_id, user.app_metadata)
        .then(function(){
          callback(null, user, context);
        })
        .catch(function(err){
          callback(err);
        });
    }


  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('Access token must exist to fetch profile');
      }

      const self = this;
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (profile) {
          self.userProfile = profile;
        }
        cb(err, profile);
  });
}


}
