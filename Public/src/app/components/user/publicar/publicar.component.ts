import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './../../../services/auth.service';
import {FletesService} from './../../../services/fletes.service';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {

  public formaFlete = false

  constructor(public _fletesServices:FletesService, public auth: AuthService) { }

  ngOnInit() {
    this.auth.instanceProfile()
  }

  enviar(forma:NgForm){
    this._fletesServices.postNewFleteForm(forma, this.auth.userProfile)
    .subscribe(res => {
        if(res){
          this.formaFlete = true
          console.log("formaFLete: ",this.formaFlete)
        }
    })
  }

}
