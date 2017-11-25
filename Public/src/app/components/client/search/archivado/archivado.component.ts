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
      .subscribe()
    },800)
  }

  quitar(id_archivado){
    this._fletesService.quitarArchivado(id_archivado, this.auth.userProfile._id)
    .subscribe(data=>{
      this._fletesService.instanceArchivados(this.auth.userProfile)
      .subscribe()
    })
  }

  ofertar(id_archivado){
    this._fletesService.ofertarFleteArchivado(id_archivado, this.auth.userProfile._id)
    .subscribe(data => {
      this._fletesService.instanceArchivados(this.auth.userProfile)
      .subscribe()
    })
  }

}
