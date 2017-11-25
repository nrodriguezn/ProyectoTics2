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
    if(this.auth.isAuthenticated()){
      console.log("buscar por comuna")
      console.log(this.comunaBuscar)
      this._fletesService.filtrarPorComuna(this.comunaBuscar)
      .subscribe()
    }
  }

  archivar(id, mongo_id){ //IMPORTANTE Recibe los valores al revez, me equivoque desde la vista jaja
    this.auth.userProfile.archivados.push(mongo_id)

      this._fletesService.archivarButton(this.auth.userProfile, mongo_id)
       .subscribe(dato =>{
         this.auth.instanceProfile()
       })
  }

  ofertar(id_flete){
      this._fletesService.ofertarFleteNormal(id_flete, this.auth.userProfile._id)
        .subscribe()
  }




}
