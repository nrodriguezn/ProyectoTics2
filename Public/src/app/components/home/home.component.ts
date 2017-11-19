import { Component, OnInit } from '@angular/core';
import {FletesService} from './../../services/fletes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

userType:string

  constructor(private _fletesService:FletesService) { }

  ngOnInit() {
  }



  changeUserType(){
    this._fletesService.setUserType();
    this.userType = this._fletesService.getUserType()

  }

}
