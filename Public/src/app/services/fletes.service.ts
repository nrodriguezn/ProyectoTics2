import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FletesService {

  constructor(  private router:Router, private http:Http ) { }

  public usuario = 'cliente'
  public profile:string
  // public apiUrl:string = 'https://fletes-portales.herokuapp.com/api'
  public apiUrl:string = 'http://localhost:3000/api'


//Funciones Basicas

  setUserType(){
    if(this.usuario == 'usuario'){
      this.usuario = 'cliente'
    }else{
      this.usuario = 'usuario'
    }
  }

  getUserType(){
    return this.usuario;
  }

//Peticiones a la API
getProfileSesion(sub:string){
  let url = `${ this.apiUrl }/${sub}`
  return this.http.get(url)
    .map(res=>res.json())
}

postNewProfile(profile:any){
  let body = JSON.stringify(profile)
  let headers = new Headers({
    'Content-Type':'application/json'
  })
  return this.http.post(this.apiUrl, body, { headers } ) //URL, BODY, HEADERS
          .map(res=>{
          console.log(res.json())
          return res.json()
        })
}

test(){
  let url = `${this.apiUrl}/setsesion`
  return this.http.get(url)
      .map(res => {
        console.log(res.json())
        return res.json()})
}









  // CRUD
//   nuevoHeroe(heroe:Heroe){
//   let body = JSON.stringify(heroe)
//   let headers = new Headers({
//     'Content-Type':'application/json'
//   })
//   return this.http.post(this.fireURL, body, { headers } ) //URL, BODY, HEADERS
//           .map(res=>{
//           console.log(res.json())
//           return res.json()
//         })
// }
//
// actualizarHeroe(heroe:Heroe, key$:string){
//   let body = JSON.stringify(heroe)
//   let headers = new Headers({
//     'Content-Type':'application/json'
//   })
//   let url = `${this.heroeURL}/${ key$ }.json`
//   return this.http.put(url, body, { headers } ) //URL, BODY, HEADERS
//           .map(res=>{
//           console.log("Actualizar servicio")
//           console.log(res.json())
//           return res.json()
//         })
// }
//
// getHeroe(key$:string){
//   let url = `${ this.heroeURL }/${ key$}.json`
//   return this.http.get(url)
//     .map(res=>res.json())
// }
//
// getHeroes(){
//   return this.http.get(this.fireURL)
//     .map(res=>res.json())
// }
//
// borrarHeroe(key$:string){
//   let url = `${this.heroeURL}/${key$}.json`
//   return this.http.delete(url)
//     .map( res => res.json() )
// }
}
