import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../models/equipo';
import { createAotUrlResolver } from '@angular/compiler';
import { NgForm,FormBuilder,FormGroup, Validators,FormControl} from '@angular/forms';


@Component({
  selector: 'app-registro-equipo',
  templateUrl: './registro-equipo.component.html',
  styleUrls: ['./registro-equipo.component.css']
})
export class RegistroEquipoComponent implements OnInit {


  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  telPattern: any=/^(?=.*?[0-9])|(([a-zA-Z\-0-9]+\.)).*$/;
  identiPattern: any=/^(?=.*?[0-9]).*$/;

  createFormGroup(){
    return new FormGroup({
      entrenador: new FormControl('',[Validators.required, Validators.maxLength(10),Validators.pattern(this.telPattern)]),
      name: new FormControl('',[Validators.required, Validators.minLength(8)]),
      identificacion: new FormControl('',[Validators.required, Validators.minLength(6),Validators.pattern(this.identiPattern)]),
      jugadores: new FormControl('',[Validators.required, ]),
      categoria: new FormControl('',[Validators.required, ]),
      genero: new FormControl('',[Validators.required, ]),
      asistente: new FormControl('',[Validators.required, ]),
      estadistica: new FormControl('',[Validators.required,]),

    });
  }
  registroEquiForm: FormGroup;

  constructor(private equiposervice: EquipoService) { 
    this.registroEquiForm = this.createFormGroup();
  }
  myForm: FormGroup; 

  ngOnInit() {
    this.getEquipo();


  }

  addEquipo(form?: NgForm) {
    console.log(form.value);
    if(this.registroEquiForm.valid){
      if (form.value._id) {
        this.equiposervice.putEquipo(form.value)
          .subscribe(res => {
            this.resetForm(form);
            this.getEquipo();
  
          });
    }} else {
      console.log('no valido')
      if(form.value.name == ""  && form.value.categoria == "" && form.value.genero =="" && form.value.identificacio == ""){
        M.toast({html: 'Debe llenar todos los campos'});
      }else if (form.value.name == "") {
        M.toast({html: 'Debe llenar el nombre'});
      } else if (form.value.identificacio == "" ) {
        M.toast({html: 'Debe llenar la identificacion'});
      } else if (form.value.genero == "") {
        M.toast({html: 'Debe seleccionar un genero'});
      } else if (form.value.categoria == "") {
        M.toast({html: 'Debe seleccionar una categoria'});
      } else {
        this.equiposervice.postEquipo(form.value)
          .subscribe(res => {
            this.getEquipo();
            this.resetForm(form);
          });
      }

    }

  }

  get name(){return this.registroEquiForm.get('name')};
  get identificacion(){return this.registroEquiForm.get('identificacion')};
  get genero(){return this.registroEquiForm.get('genero')};
  get asistente(){return this.registroEquiForm.get('asistente')};
  get entrenador(){return this.registroEquiForm.get('entrenador')};
  get categoria(){return this.registroEquiForm.get('categoria')};
  get jugadores(){return this.registroEquiForm.get('jugadores')};
  get estadistica(){return this.registroEquiForm.get('estadistica')};

  


  getEquipo() {
    this.equiposervice.getEquipo()
      .subscribe(res => {
        this.equiposervice.equipos = res as Equipo[];
      });
  }

  editUsuario(equipo: Equipo) {
    this.equiposervice.selectedEquipo = equipo;
  }

  deleteUsuario(_id: string, form: NgForm) {
    if (confirm('Estas seguro que deseas borrar el usuario?')) {
      this.equiposervice.deleteEquipo(_id)
        .subscribe(res => {
          this.getEquipo();
          this.resetForm(form);
        });
    }
  }
  
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      M.toast({html: 'formulario borrado'});
      this.equiposervice.selectedEquipo = new Equipo();
    }
  }


}
