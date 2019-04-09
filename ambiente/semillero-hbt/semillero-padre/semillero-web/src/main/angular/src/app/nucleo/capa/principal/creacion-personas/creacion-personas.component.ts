import { Component, OnInit } from '@angular/core';
import { modeloPersona } from './modelo/modelo-persona';
@Component({
  selector: 'app-creacion-personas',
  templateUrl: './creacion-personas.component.html'
})
export class CreacionPersonasComponent implements OnInit {
  public persona: modeloPersona;
  public personas: modeloPersona[];
 
  constructor() { }

  ngOnInit() {
  }

}
