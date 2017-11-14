import { Component } from '@angular/core';
import {FletesService} from './services/fletes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private _fletesService:FletesService){}
  
  usuario = 'usuario'
  title = 'FletesApp';
}
