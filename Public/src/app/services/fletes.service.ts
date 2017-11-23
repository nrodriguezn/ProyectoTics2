import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class FletesService {

  constructor(  private router:Router, private http:Http ) { }

  public usuario = ''

  // public apiUrl:string = 'https://fletes-portales.herokuapp.com/api'
  public apiUrl:string = 'http://localhost:3000/api'


//Funciones Basicas

  getUserType(){
    return this.usuario;
  }

//Peticiones a la API
getProfileSesion(sub:String){
  let url = `${ this.apiUrl }/people/${sub}`
  return this.http.get(url)
    .map(res=>res.json())
}

postNewProfile(profile:any){
  let body = JSON.stringify(profile)
  let url = `${this.apiUrl}/people`
  let headers = new Headers({
     'Content-Type':'application/json'
   })
   return this.http.post(url , body, {headers} ) //URL, BODY, HEADERS
          .map(res=>{
          this.usuario = res.json().people.tipo
          return res.json()
        })
}

//POST NEW FLETE, DESDE usuario
public postNewFleteForm(forma, userProfile){
    console.log("userProfile",userProfile)
    if(forma.form._value.tipoFlete == null){
    forma.form._value.tipoFlete = "normal"
  }
    forma.form._value.id_mongodb = userProfile._id
    let url = `${this.apiUrl}/postform`
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.post(url, forma.form._value, {headers})
    .map(res => {
       let status = res
       return status
    })

}





test(){
  let url = `${this.apiUrl}/setsesion`
  console.log("getTest")
  let headers = new Headers({
     'Content-Type':'application/json'
   })
  return this.http.get(url, {headers})
  .map(res => res.json())
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
