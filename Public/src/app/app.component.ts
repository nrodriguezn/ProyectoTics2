import { Component, OnInit } from '@angular/core';
import { FletesService } from './services/fletes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  usuario:string

  constructor( private activatedRoute: ActivatedRoute, private _fletesService:FletesService){}

  ngOnInit() {
    //this.activatedRoute.params
    //.subscribe( this.usuario => this.usuario = this._fletesService.getUserType())
      this.usuario = this._fletesService.getUserType()
  }

}
