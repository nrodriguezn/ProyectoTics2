import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class FletesService {

  constructor(private router: Router, private http: Http) { }

  public usuario = ''
  public fletes: any[] = []
  public fletesArchivados: any[] = []


  // public apiUrl:string = 'https://fletes-portales.herokuapp.com/api'
  public apiUrl: string = 'http://localhost:3000/api'


  public getUserType() {
    return this.usuario;
  }

  public getProfileSesion(sub: String) {
    let url = `${this.apiUrl}/people/${sub}`
    return this.http.get(url)
      .map(res => res.json())
  }

  public postNewProfile(profile: any) {
    let body = JSON.stringify(profile)
    let url = `${this.apiUrl}/people`
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.post(url, body, { headers }) //URL, BODY, HEADERS
      .map(res => {
        this.usuario = res.json().people.tipo
        return res.json()
      })
  }

  public postNewFleteForm(forma, userProfile) {
    if (forma.form._value.tipoFlete == null) {
      forma.form._value.tipoFlete = "normal"
    }
    forma.form._value.id_mongodb = userProfile._id
    let url = `${this.apiUrl}/postform`
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.post(url, forma.form._value, { headers })
      .map(res => {
        let status = res
        return status
      })

  }

  public getAllFletes() {
    let url = `${this.apiUrl}/fletes`
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.get(url, { headers })
      .map(res => {
        return res.json()
      })
  }

  public filtrarPorComuna(comuna) {
    let url = `${this.apiUrl}/fletes/${comuna}`
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.get(url, { headers })
      .map(res => {
        // return res.json()
        this.fletes = res.json().send
      })
  }

  public archivarButton(body, mongo_id) {
    let url = `${this.apiUrl}/fletes/archivar`
    let headers = new Headers({
      'Content-Type': 'application/json'
    })

    return this.http.put(url, body, { headers })
      .map(res => res.json())
  }

  public verPerfilButton(mongo_id) {
    console.log("ver Perfil", mongo_id)
  }

  public instanceArchivados(user) {
    let url = `${this.apiUrl}/fletes/archivados/${user._id}`
    let headers = new Headers({
      'Content-Type': 'application/json'
    })

    return this.http.get(url, { headers })
      .map(res => {
        this.fletesArchivados = res.json().archivados
        return this.fletesArchivados
      })
  }

  public quitarArchivado(id_archivado, id_usuario) {
    let url = `${this.apiUrl}/fletes/quitar/archivado`
    var body = {
      _id_archivado: id_archivado,
      _id_usuario: id_usuario
    }
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.put(url, body, { headers })
      .map(res => {
        res.json()
      })
  }

  public ofertarFleteArchivado(id_archivado, id_usuario, forma) {
    let url = `${this.apiUrl}/fletes/ofertar/archivado`
    var body = {
      _id_archivado: id_archivado,
      _id_usuario: id_usuario,
      _valor_flete: forma.form._value.valor_flete
    }
    let headers = new Headers({
      'Content-Type': 'application/json'
    })

    return this.http.put(url, body, { headers })
      .map(res => {
        res.json()
      })
  }

  public ofertarFleteNormal(id_flete, id_usuario, forma) {
    let url = `${this.apiUrl}/fletes/ofertar/normal`
    var body = {
      _id_flete: id_flete,
      _id_usuario: id_usuario,
      _valor_flete: forma.form._value.valor_flete
    }
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.put(url, body, { headers })
      .map(res => {
        res.json()
      })
  }

  public getAllFletesOfertadosActivos(id_usuario) {
    let url = `${this.apiUrl}/fletes/ofertados/${id_usuario}`
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    console.log("url", url)
    return this.http.get(url, { headers })
      .map(res => {
        return res.json()
      })
  }

  public abandonarActivo(id_flete, id_usuario) {
    let url = `${this.apiUrl}/fletes/activo/abandonar`
    var body = {
      _id_activo: id_flete,
      _id_usuario: id_usuario
    }
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.put(url, body, { headers })
      .map(res => {
        res.json()
      })
  }

  public getAllFletesUsuario(id) {
    let url = `${this.apiUrl}/fletes/usuario/${id}`
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.get(url, { headers })
      .map(res => {
        return res.json()
      })
  }

  public getClientProfile(id_usuario) {
    let url = `${this.apiUrl}/people/client/${id_usuario}`
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.get(url, { headers })
      .map(res => {
        return res.json()
      })
  }

  public actualizarFlete(forma) {
    let body = JSON.stringify(forma)
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    let url = `${this.apiUrl}/flete/update`
    return this.http.put(url, forma, { headers }) //URL, BODY, HEADERS
      .map(res => {
        console.log(res.json())
        return res.json()
      })
  }

  public deleteFleteUser(flete_id) {
    let url = `${this.apiUrl}/flete/${flete_id}`
    return this.http.delete(url)
      .map(res => res.json())
  }

  public countsInitProfile(id_){
    console.log("countsInitProfile")
    let url = `${this.apiUrl}/count/${id_}`
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.get(url, { headers })
    .map(res => {
      return res.json()
    })
  }

  public updateProfileClient(profile){
    let body = JSON.stringify(profile)
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    let url = `${this.apiUrl}/people/profileUpdate`
    return this.http.put(url, body, { headers }) //URL, BODY, HEADERS
      .map(res => {
        console.log(res.json())
        return res.json()
      })
  }


  test() {
    let url = `${this.apiUrl}/setsesion`
    console.log("getTest")
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    return this.http.get(url, { headers })
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
