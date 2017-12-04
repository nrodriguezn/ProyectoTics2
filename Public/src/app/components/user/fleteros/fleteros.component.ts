import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    setTimeout(time=>{
      this.auth.instanceProfile()
      this._fletesService.getAllFletesUsuario(this.auth.userProfile._id)
      .subscribe(data => {
        this.fletes = data.sends
        console.log(this.fletes)
      })
    },1000)


  }

}
