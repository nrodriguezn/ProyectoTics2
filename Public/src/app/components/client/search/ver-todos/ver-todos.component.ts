import { Component, OnInit } from '@angular/core';
import {FletesService} from './../../../../services/fletes.service';
import {AuthService} from './../../../../services/auth.service';

@Component({
  selector: 'app-ver-todos',
  templateUrl: './ver-todos.component.html',
  styleUrls: ['./search.component.css']
})
export class VerTodosComponent implements OnInit {

  constructor(public auth:AuthService, public _fletesService:FletesService) { }

 public fletes:any[] = []

  ngOnInit() {
    this.auth.instanceProfile()
    this._fletesService.getAllFletes()
    .subscribe(data => {
      this.fletes = data.sends
      console.log(this.fletes)
    })
  }

}
