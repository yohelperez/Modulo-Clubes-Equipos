import { Component, OnInit } from '@angular/core';

import { ClubService } from '../../services/club.service';

@Component({
  selector: 'app-editar-club',
  templateUrl: './editar-club.component.html',
  styleUrls: ['./editar-club.component.css']
})
export class EditarClubComponent implements OnInit {
  identificacion : String;
  nombre : String;
  municipio : String;
  telefono : String;
  logo : String;

  constructor(private clubservice : ClubService) { }

  ngOnInit(): void {
   this.traerDatosClub();
    
  }

  traerDatosClub(){
    let idclub = localStorage.getItem('idclubs')
    this.clubservice.onedatos(idclub).subscribe((res:any)=>{
      console.log(res)
      this.nombre = res.nombre;
      this.logo = res.logo;
      this.identificacion = res.identificacion;
      this.telefono = res.telefono;
      this.municipio = res.municipio;
    })

  }

  actualizarinfo(){
    const info = this.traerDatosClub();
    console.log(info)
  }

}
