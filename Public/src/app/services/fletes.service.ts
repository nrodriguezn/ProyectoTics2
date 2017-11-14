import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class FletesService {

  constructor(  private router:Router ) { }
  private usuario = 'usuario'

  setUserType(UserType){
    this.usuario = UserType
    if(this.usuario == "cliente"){
      this.router.navigate(['/appComponent'])
      console.log("cliente")
    }else if(this.usuario == "usuario"){
      this.router.navigate(['/appComponent'])
      console.log("usuario")
    }
  }
  getUserType(){
    return this.usuario;
  }
}
