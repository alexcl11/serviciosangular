import { Component, OnInit } from '@angular/core';
import { ServiceCoche } from '../../services/service.coche';
import { Coche } from '../../models/Coche';

@Component({
  selector: 'app-coches.component',
  standalone: false,
  templateUrl: './coches.component.html',
  styleUrl: './coches.component.css',
  providers: [ServiceCoche]
})
export class CochesComponent implements OnInit{
  public coches!: Array<Coche>;

  constructor(private _service: ServiceCoche){
    this.coches = [
      {
        idcoche: 1,
        marca: "",
        modelo: "",
        conductor: "",
        imagen:""
      }
    ]
  }

  ngOnInit(): void {
    this._service.getCoches().then(response => {
      this.coches = response
    })
  }
}
