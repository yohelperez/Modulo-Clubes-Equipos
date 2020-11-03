import { Injectable } from '@angular/core';
import { Equipo } from '../models/equipo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

 
  selectedEquipo: Equipo;
  equipos: Equipo[];
  
  readonly URL_API = 'http://localhost:3000/api';


  constructor(private http: HttpClient) {
    this.selectedEquipo = new Equipo();
  }


  postEquipo(equipo: Equipo) {
    return this.http.post(this.URL_API, equipo);
  }

  getEquipo() {
    return this.http.get(this.URL_API);
  }

  putEquipo(equipo: Equipo) {
    return this.http.put(this.URL_API + `/${equipo._id}`, equipo);
  }

  deleteEquipo(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }


  onedatos(id:string){
    return this.http.get(this.URL_API+"/one/"+id);
  }

  buscar(data: any){
    return this.http.post(this.URL_API+"/buscar" , data)
  }
}