import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/Persona';
import { ServicePersona } from '../../services/service.persona';

@Component({
  selector: 'app-personas-standalone',
  standalone: true,
  templateUrl: './personasstandalone.component.html',
  styleUrl: './personasstandalone.component.css',
  providers: [ServicePersona]
})
export class PersonasstandaloneComponent implements OnInit{
    public personas!: Array<Persona>
  constructor(private _service: ServicePersona){}

  ngOnInit(): void {
      // this._service.getPersonas().subscribe(response => {
      //   this.personas = response
      // })
      this._service.getPersonasPromise().then(response => {
        this.personas = response
      })
  }



}
