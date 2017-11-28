import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {FletesService} from './../../services/fletes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService, private _fletesService:FletesService) {
  auth.handleAuthentication();
  //this._fletesService.getUsinformerType()
    //    .subscribe()
  }


  ngOnInit() {

  }

  login(){
    this.auth.login()
  }

  logout(){
    this.auth.logout()
  }


}
