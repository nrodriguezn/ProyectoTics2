import { Component, OnInit } from '@angular/core';
import { FletesService } from '../../services/fletes.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _fletesService:FletesService) { }

  ngOnInit() {
  }
  setUserTypeLogin(userType){
    return this._fletesService.setUserType(userType)
  }

}
