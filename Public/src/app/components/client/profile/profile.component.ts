import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../../services/auth.service';
import {FletesService} from './../../../services/fletes.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userType:string
  profile:any

  constructor(public auth:AuthService, private _fletesService:FletesService) { }

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

}
