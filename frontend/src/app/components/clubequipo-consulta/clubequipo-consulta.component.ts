import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClubService } from 'src/app/services/club.service';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-clubequipo-consulta',
  templateUrl: './clubequipo-consulta.component.html',
  styleUrls: ['./clubequipo-consulta.component.css']
})
export class ClubequipoConsultaComponent implements OnInit {

  constructor(private clubservice: ClubService, private equiposervice : EquipoService) { }
  data ={nombre :''}

  ngOnInit(): void {
  }


  cambiaBusquedaEqui(){
    let input = document.getElementById("busqueda");
    input.placeholder = "busca equipos" ;
    console.log(input.placeholder); 
  }

  cambiaBusquedaClub(){
    let input = document.getElementById("busqueda");
    input.placeholder = "busca clubs" ;
    console.log(input.placeholder); 
  }

  buscarEquipo(){
    let input = document.getElementById("busqueda").value;
    

  }

  redireccionRegistro(){
    var valor = document.getElementById("busqueda").placeholder;
    if(valor == "busca equipos"){
      location.replace ('/registroequipo');
    }else{
      location.replace ('/registroclub');
    }
    
  }

  buscar(){
    var valor = document.getElementById("busqueda").placeholder;
    console.log("search")
    M.toast({html: 'buscando'});
    /*
    if(valor == "busca equipos"){
      
      this.equiposervice.buscar(this.data).subscribe((rest:any)=>{
        if(rest.result == true){
          localStorage.setItem('idequipo', rest.data._id);
        }else{
          M.toast({html: 'No se ecuentra'});
        }
      })
      
    }else{
      this.clubservice.buscar(this.data).subscribe((rest:any)=>{
        if(rest.result == true){
          localStorage.setItem('idclubs', rest.data._id);
        }else{
          M.toast({html: 'No se ecuentra'});
        }
    })
  }*/
}//activar cuando se haya cargado el json a la base de datos
  


}
