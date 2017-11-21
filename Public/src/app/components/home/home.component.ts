import { Component, OnInit } from '@angular/core';
import {FletesService} from './../../services/fletes.service';
import {AuthService} from './../../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

userType:string
profile:any

  constructor(private _fletesService:FletesService, public auth:AuthService) { }

  ngOnInit() {
    this.userType = this._fletesService.getUserType()

      if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
      } else {
        this.auth.getProfile((err, profile) => {
          this.profile = profile;
        });
      }
    }



  changeUserType(){
    this._fletesService.setUserType();
    this.userType = this._fletesService.getUserType()

  }

}
