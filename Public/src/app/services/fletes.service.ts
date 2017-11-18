import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class FletesService {

  constructor(  private router:Router ) { }
  private usuario = 'usuario'


  getUserType(){
    return this.usuario;
  }
}
