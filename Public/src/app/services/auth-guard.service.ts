import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
//router ayuda a redireccionarnos, el siguiente para preguntar a que pagina queere entrar.. etc..

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService) { }

  canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot){

    console.log(next)

    if(this.auth.isAuthenticated()){
      console.log("paso el guard")
      return true
    }else{
      console.error("bloqueado por el guard")
      return false
    }
  }


}
