import { Injectable } from '@angular/core';
import { Club } from '../models/club';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

 
  selectedClub: Club;
  clubes: Club[];
  
  readonly URL_API = 'http://localhost:3000/api';


  constructor(private http: HttpClient) {
    this.selectedClub = new Club();
  }


  postClub(club: Club) {
    return this.http.post(this.URL_API, club);
  }

  getClub() {
    return this.http.get(this.URL_API);
  }

  putClub(club: Club) {
    return this.http.put(this.URL_API + `/${club._id}`, club);
  }

  deleteClub(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }


  onedatos(id:string){
    return this.http.get(this.URL_API+"/one/"+id);
  }
}
