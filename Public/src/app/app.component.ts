import { Component, OnInit } from '@angular/core';
import { FletesService } from './services/fletes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  usuario:string

  constructor( private _fletesService:FletesService){}

  ngOnInit() {
      this.usuario = this._fletesService.getUserType()
  }
    
}
