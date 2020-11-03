import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";



//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubequipoConsultaComponent } from './components/clubequipo-consulta/clubequipo-consulta.component';
import { RegistroClubComponent } from './components/registro-club/registro-club.component';
import { RegistroEquipoComponent } from './components/registro-equipo/registro-equipo.component';
import { EditarEquipoComponent } from './components/editar-equipo/editar-equipo.component';
import { EditarClubComponent } from './components/editar-club/editar-club.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubequipoConsultaComponent,
    RegistroClubComponent,
    RegistroEquipoComponent,
    EditarEquipoComponent,
    EditarClubComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
