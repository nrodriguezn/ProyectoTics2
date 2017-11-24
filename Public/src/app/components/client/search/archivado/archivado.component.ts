import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../../../services/auth.service';
import {FletesService} from './../../../../services/fletes.service';


@Component({
  selector: 'app-archivado',
  templateUrl: './archivado.component.html',
  styleUrls: ['./archivado.component.css']
})
export class ArchivadoComponent implements OnInit {

  constructor(public _fletesService:FletesService, public auth:AuthService) { }

  ngOnInit() {
    this.auth.instanceProfile()
    setTimeout(time=>{
      this._fletesService.instanceArchivados(this.auth.userProfile)
      // .subscribe(dato=>{console.log(this._fletesService.fletesArchivados)})
      .subscribe(dato=>{console.log(this._fletesService.fletesArchivados)})
    },800)

  }

}
