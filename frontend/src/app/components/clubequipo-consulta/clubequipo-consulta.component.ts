import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clubequipo-consulta',
  templateUrl: './clubequipo-consulta.component.html',
  styleUrls: ['./clubequipo-consulta.component.css']
})
export class ClubequipoConsultaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  cambiaBusquedaEqui(){
    console.log('hola')
    let input = document.getElementById("busqueda");
    input.placeholder = "busca equipos" ;
    console.log(input.placeholder); 
  }

  cambiaBusquedaClub(){
    console.log('holi')
    let input = document.getElementById("busqueda");
    input.placeholder = "busca clubs" ;
    console.log(input.placeholder); 
  }

  buscarEquipo(){
    console.log("apaa")
    let input = document.getElementById("busqueda").value;
    

  }

  redireccionClub(){
    var valor = document.getElementById("busqueda").placeholder;
    if(valor == "busca equipos"){
      location.replace ('/registroequipo');
    }else{
      location.replace ('/registroclub');
    }
    
   
  }

}
