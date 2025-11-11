import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Plantilla } from "../models/Plantilla";

Injectable()
export class ServicioPlantilla{
    urlPlantilla = environment.urlPlantilla

    getFuncionesPlantilla(): Promise<Array<string>>{
        let request = "api/plantilla/funciones";
        let funciones = fetch(this.urlPlantilla+request).then(response => response.json())
        return funciones
    }

    getPlantillaPorFuncion(funcion:string): Promise<Array<Plantilla>>{
        let request = "api/plantilla/plantillafuncion/"+funcion
        let plantilla = fetch(this.urlPlantilla+request).then(response => response.json())
        return plantilla
    }
    getPlantillaPorFunciones(funciones:Array<string>): Promise<Array<Plantilla>>{
        let request = "api/plantilla/plantillafunciones?";
        for (let i = 0; i < funciones.length; i++) {
            request += "funcion="+funciones[i]+"&"            
        }
        request = request.slice(0, -1);
        let plantilla = fetch(this.urlPlantilla+request).then(response => response.json())
        return plantilla
    }

}