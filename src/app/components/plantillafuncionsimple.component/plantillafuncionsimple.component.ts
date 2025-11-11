import { Component, OnInit } from '@angular/core';
import { Plantilla } from '../../models/Plantilla';
import { ServicioPlantilla } from '../../services/service.plantilla';

@Component({
  selector: 'app-plantillafuncionsimple.component',
  standalone: false,
  templateUrl: './plantillafuncionsimple.component.html',
  styleUrl: './plantillafuncionsimple.component.css',
  providers:[ServicioPlantilla]
  
})

export class PlantillafuncionsimpleComponent implements OnInit{
  public plantilla: Array<Plantilla> = [];
  public funciones: Array<string> = [];
  public selectFuncion: string = '';

  constructor(private _service: ServicioPlantilla){ }

  ngOnInit(): void {
    this._service.getFuncionesPlantilla().then(response => {
      console.log(response)
      this.funciones = response
    })
  }

  buscarPlantilla(): void{
    this._service.getPlantillaPorFuncion(this.selectFuncion).then(response => {
      this.plantilla = response
    })
  }
}
