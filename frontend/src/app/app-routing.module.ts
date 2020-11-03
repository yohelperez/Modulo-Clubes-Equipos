import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubequipoConsultaComponent } from './components/clubequipo-consulta/clubequipo-consulta.component';
import { RegistroClubComponent } from './components/registro-club/registro-club.component';
import { RegistroEquipoComponent } from './components/registro-equipo/registro-equipo.component';


const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: ClubequipoConsultaComponent},
  {path: 'registroclub', component: RegistroClubComponent},
  {path: 'registroequipo', component : RegistroEquipoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
