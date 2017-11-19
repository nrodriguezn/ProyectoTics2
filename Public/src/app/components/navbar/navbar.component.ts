import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FletesService} from './../../services/fletes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  userType:string

  constructor(private auth:AuthService, private _fletesService:FletesService) {


  auth.handleAuthentication(); }

  ngOnInit() {
  }

  login(){
  this.auth.login()
  }

  salir(){
    this.auth.logout()
  }

  setUserType(){
    this.userType = this._fletesService.getUserType();
  }



}
