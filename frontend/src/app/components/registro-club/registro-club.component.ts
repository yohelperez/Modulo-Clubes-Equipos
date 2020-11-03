import { Component, OnInit } from '@angular/core';
import { ClubService } from '../../services/club.service';
import { Club } from '../../models/club';
import { createAotUrlResolver } from '@angular/compiler';
import { NgForm,FormBuilder,FormGroup, Validators,FormControl} from '@angular/forms';

declare var N: any;

 



@Component({
  selector: 'app-registro-club',
  templateUrl: './registro-club.component.html',
  styleUrls: ['./registro-club.component.css'],
  providers: [ClubService]
})



export class RegistroClubComponent implements OnInit {
  
  municipios = ["-","Medellín","Abejorral","Abriaqui","Alejandría","Amaga","Amalfi","Andes","Angelopolis","Angostura","Anorí",
  "Anza","Apartad","Arboletes","Argelia","Armenia","Barbosa","Bello","Belmira","Betania","Betulia","Bolívar","Briceño","Buritica","Cáceres","Caicedo" 
  ,"Caldas","Campamento","Cañasgordas","Caracolí","Caramanta","Carepa","Carmen De Viboral","Carolina","Caucasia","Chigorodó","Cisneros","Cocorná","Concepción","Concordia","Copacabana",
  "Dabeiba","Don Matías","Ebejico","El Bagre","Entrerrios","Envigado","Fredonia","Frontino","Giraldo","Girardota","Gómez Plata","Granada","Guadalupe","Guarne,Guatapé",
  "Heliconia","Hispania","Itagui","Ituango","Jardín","Jericó","La Ceja","La Estrella","La Pintada","La Unión","Liborina","Maceo","Marinilla","Montebello","Murindó","Mutatá","Nariño","Nechí",
  "Necoclí","OlayaPeñol","Peque","Pueblorrico","Puerto Berrío","Puerto Nare","Puerto Triunfo","Remedios","Retiro","Rionegro","Sabanalarga","Sabaneta","Salgar","San Andrés","San Carlos","San Francisco",
  ,"..."];

  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  telPattern: any=/^(?=.*?[0-9])|(([a-zA-Z\-0-9]+\.)).*$/;
  identiPattern: any=/^(?=.*?[0-9]).*$/;
  createFormGroup(){
    return new FormGroup({
      telefono: new FormControl('',[Validators.required, Validators.maxLength(10),Validators.pattern(this.telPattern)]),
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      identificacion: new FormControl('',[Validators.required, Validators.minLength(6),Validators.pattern(this.identiPattern)]),
      municipio: new FormControl('',[Validators.required, ]),
      logo: new FormControl('',[Validators.required, ]),

    });
  }
  registroForm: FormGroup;

  constructor(private clubservice: ClubService) { 
    this.registroForm = this.createFormGroup();
  }
  myForm: FormGroup; 

  ngOnInit() {
    this.getClub();


  }

  addClub(form?: NgForm) {
    console.log(form.value);
    if(this.registroForm.valid){
      if (form.value._id) {
        this.clubservice.putClub(form.value)
          .subscribe(res => {
            this.resetForm(form);
            this.getClub();
  
          });
    }} else {
      console.log('no valido')
      if(form.value.name == "" && form.value.municipio == "" && form.value.telefono == "" && form.value.identificacion == "" && form.value.telefono == ""){
        M.toast({html: 'Debe llenar todos los campos'});
      }else if (form.value.name == "") {
        M.toast({html: 'Debe llenar el nombre'});
      } else if (form.value.municipio == "" ) {
        M.toast({html: 'Debe seleccionar un municipio'});
      } else if (form.value.identificacion == "") {
        M.toast({html: 'Debe llenar el campo identificacio'});
      } else if (form.value.telefono == "") {
        M.toast({html: 'Debe llenar el campo  telefono'});
      }else if (form.value.logo == "") {
        M.toast({html: 'Debe seleccionar una imagen'});
      } else {
        this.clubservice.postClub(form.value)
          .subscribe(res => {
            this.getClub();
            this.resetForm(form);
          });
      }

    }

  }

  get name(){return this.registroForm.get('name')};
  get identificacion(){return this.registroForm.get('identificacion')};
  get municipio(){return this.registroForm.get('municipio')};
  get telefono(){return this.registroForm.get('telefono')};
  get logo(){return this.registroForm.get('logo')};


  


  getClub() {
    this.clubservice.getClub()
      .subscribe(res => {
        this.clubservice.clubes = res as Club[];
      });
  }

  editUsuario(club: Club) {
    this.clubservice.selectedClub = club;
  }

  deleteUsuario(_id: string, form: NgForm) {
    if (confirm('Estas seguro que deseas borrar el usuario?')) {
      this.clubservice.deleteClub(_id)
        .subscribe(res => {
          this.getClub();
          this.resetForm(form);
        });
    }
  }
  
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      M.toast({html: 'formulario borrado'});
      this.clubservice.selectedClub = new Club();
    }
  }
}
