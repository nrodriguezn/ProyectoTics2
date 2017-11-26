import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../../../services/auth.service';
import {FletesService} from './../../../../services/fletes.service';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
    styleUrls: ['./activos.component.css']
})
export class ActivosComponent implements OnInit {



  constructor(public auth:AuthService, public _fletesService:FletesService) { }

  ngOnInit() {
      this.auth.instanceProfile()
      this._fletesService.getAllFletesOfertadosActivos(this.auth.userProfile._id)
      .subscribe(data => {
        // this._fletesService.ofertadosActivos = data
        console.log("fletes", this._fletesService.ofertadosActivos)

      })
  }
}
