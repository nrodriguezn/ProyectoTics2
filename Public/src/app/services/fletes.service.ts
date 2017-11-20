import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class FletesService {

  constructor(  private router:Router ) { }
  private usuario = 'cliente'

  setUserType(){

    if(this.usuario == 'usuario'){
      this.usuario = 'cliente'
    }else{
      this.usuario = 'usuario'
    }
    console.log(this.usuario)
  }

  getUserType(){
    console.log("getUserType Servicio")
    return this.usuario;
  }
}
