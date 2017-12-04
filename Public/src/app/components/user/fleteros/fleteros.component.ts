import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FletesService} from './../../../services/fletes.service';
import {AuthService} from './../../../services/auth.service';


@Component({
  selector: 'app-fleteros',
  templateUrl: './fleteros.component.html',
  styleUrls: ['./fleteros.component.css']
})
export class FleterosComponent implements OnInit {

  constructor(public auth:AuthService, public _fletesService:FletesService) { }

public fletes:any[] = []
public clientProfile:any

  ngOnInit() {
    this.auth.instanceProfile()
    setTimeout(time=>{
      this._fletesService.getAllFletesUsuario(this.auth.userProfile._id)
      .subscribe(data => {
        this.fletes = data.sends
      })
    },800)
  }

  verPerfil(id_usuario){
    this._fletesService.getClientProfile(id_usuario)
    .subscribe(data => {
      this.clientProfile = data.people
      console.log(this.clientProfile)
    })
  }

  actualizarFlete(forma){
    this._fletesService.actualizarFlete(forma)
    .subscribe(data => {
      this.ngOnInit()
    })

  }

}
