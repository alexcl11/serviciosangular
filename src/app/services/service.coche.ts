import { Injectable } from "@angular/core";
import { Global } from "../global";
import { Coche } from "../models/Coche";


Injectable()
export class ServiceCoche {
    urlCoches = Global.urlCoches

    getCoches(): Promise<Array<Coche>>{
        let request = "webresources/coches"
        let coches = fetch(this.urlCoches+request).then(response => response.json())
        return coches
    }

}