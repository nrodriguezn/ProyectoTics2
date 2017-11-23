import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../../../services/auth.service';
import {FletesService} from './../../../../services/fletes.service';

@Component({
  selector: 'app-filtrar-comuna',
  templateUrl: './filtrar-comuna.component.html',
  styleUrls: ['./filtrar-comuna.component.css']
})
export class FiltrarComunaComponent implements OnInit {

  comunaBuscar:String = ""
  public fletes:any[] = []

  constructor(public auth:AuthService, public _fletesService:FletesService) { }

  ngOnInit() {
        this.auth.instanceProfile()
  }

  public buscarPorComuna(){
    console.log("buscar por comuna")
    console.log(this.comunaBuscar)
    this._fletesService.filtrarPorComuna(this.comunaBuscar)
    .subscribe(data => {
      this.fletes = data.send
    })
  }

}
