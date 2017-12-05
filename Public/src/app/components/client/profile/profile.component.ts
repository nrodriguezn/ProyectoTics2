import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../../services/auth.service';
import {FletesService} from './../../../services/fletes.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public userType:string
  public profile:any
  public archivados:Number = 0
  public ofertados:Number = 0

  constructor(public auth:AuthService, public _fletesService: FletesService) { }

  ngOnInit() {
     this.auth.instanceProfile()
     setTimeout(data =>{
       this._fletesService.countsInitProfile(this.auth.userProfile._id)
       .subscribe(data => {
         this.archivados = data.conteo.contArch,
         this.ofertados = data.conteo.contOfer
       })
     }, 800)

  }

  actualizarperfile(profile){
    this._fletesService.updateProfileClient(profile)
    .subscribe(data=>{
      this.auth.userProfile = data
      this.ngOnInit()
    })
  }

}
