import { Component, OnInit } from '@angular/core';
import { ServicePersona } from '../../services/service.persona';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-personas-api',
  standalone: false,
  templateUrl: './personasapi.component.html',
  styleUrl: './personasapi.component.css',
})
export class PersonasapiComponent implements OnInit{
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
