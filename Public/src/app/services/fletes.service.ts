import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class FletesService {

  constructor(  private router:Router ) { }
  private usuario = 'cliente'

  setUserType(UserType){
    this.usuario = UserType
    if(this.usuario == "cliente"){
      this.router.navigate(['/AppComponent'])
      console.log("cliente")
    }else if(this.usuario == "usuario"){
      this.router.navigate(['/AppComponent'])
      console.log("usuario")
    }
  }
  getUserType(){
    return this.usuario;
  }
}
