import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class FletesService {

  constructor(  private router:Router ) { }
  private usuario = 'usuario'

  setUserType(){

    if(this.usuario == 'usuario'){
      this.usuario = 'cliente'
    }else{
      this.usuario = 'usuario'
    }
    console.log(this.usuario)
  }

  getUserType(){
    return this.usuario;
  }
}
