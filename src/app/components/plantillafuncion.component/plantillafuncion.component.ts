import { Component } from '@angular/core';
import { ServicioPlantilla } from '../../services/service.plantilla';
import { Plantilla } from '../../models/Plantilla';

@Component({
  selector: 'app-plantillafuncion.component',
  standalone: false,
  templateUrl: './plantillafuncion.component.html',
  styleUrl: './plantillafuncion.component.css',
  providers: [ServicioPlantilla]
})
export class PlantillafuncionComponent {
  public selectFuncion: Array<string> = []
  public funciones: Array<string> = []
  public plantilla: Array<Plantilla> = []
  constructor(private _service: ServicioPlantilla){ }
  
    ngOnInit(): void {
      this._service.getFuncionesPlantilla().then(response => {
        this.funciones = response
      })
    }

  buscarPlantilla(){
    this.plantilla = []
    this._service.getPlantillaPorFunciones(this.selectFuncion).then(response => {
      for(const p of response){
        this.plantilla.push(p)
      }
    })     
    
  }
}
