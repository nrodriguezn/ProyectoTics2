import { Component, OnInit } from '@angular/core';
import {FletesService} from './../../services/fletes.service';
import {AuthService} from './../../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

userType:string = this._fletesService.usuario
profile:any
respuesta:string

  constructor(private _fletesService:FletesService, public auth:AuthService) { }

  ngOnInit() {
    this.auth.instanceProfile()
    }
  changeUserType(){
    this._fletesService.setUserType();
    // this.userType = this._fletesService.getUserType()
  }
  test(){
    this._fletesService.test()
    .subscribe(respuesta => this.respuesta = respuesta)
  }

}
