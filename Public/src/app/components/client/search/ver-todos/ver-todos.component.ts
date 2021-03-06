import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FletesService} from './../../../../services/fletes.service';
import {AuthService} from './../../../../services/auth.service';

@Component({
  selector: 'app-ver-todos',
  templateUrl: './ver-todos.component.html',
  styleUrls: ['./search.component.css']
})
export class VerTodosComponent implements OnInit {

  constructor(public auth:AuthService, public _fletesService:FletesService) { }

 public fletes:any[] = []

  ngOnInit() {
    this.auth.instanceProfile()
    this._fletesService.getAllFletes()
    .subscribe(data => {
      this.fletes = data.sends
    })
  }

  ofertar(id_flete, forma:NgForm){
      this._fletesService.ofertarFleteNormal(id_flete, this.auth.userProfile._id, forma)
        .subscribe()
  }
  archivar(id, mongo_id){ //IMPORTANTE Recibe los valores al revez, me equivoque desde la vista jaja
    this.auth.userProfile.archivados.push(mongo_id)

      this._fletesService.archivarButton(this.auth.userProfile, mongo_id)
       .subscribe(dato =>{
         this.auth.instanceProfile()
       })

  }
  verPerfil(mongo_id){
      this._fletesService.verPerfilButton(mongo_id)
      // .subscribe()
  }

}
