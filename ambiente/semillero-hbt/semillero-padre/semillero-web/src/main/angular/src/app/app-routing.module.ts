import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreacionPersonasComponent } from './nucleo/capa/principal/creacion-personas/creacion-personas.component';
import { ApoyoComponent } from './nucleo/capa/principal/apoyo/apoyo.component';
import { EditarPersonaComponent } from './nucleo/capa/principal/editar-persona/editar-persona.component';
import { GestionPersonaComponent } from './nucleo/capa/principal/gestion-persona/gestion-persona.component';
const routes: Routes = [
    {path: 'personas-crear', component: CreacionPersonasComponent},
    {path: 'componente-apoyo', component: ApoyoComponent},
    {path: 'persona-editar', component: EditarPersonaComponent},
    {path: 'persona-gestionar', component: GestionPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
