import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../global";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServicePersona{
    public urlApi:string = environment.urlApi 
    // PARA PODER REALIZAR PETICIONES, NECESITAMOS EL OBJETO
    // HttpClient.
    // DICHO OBJETO DEBEMOS INYECTARLO EN LAS CLASES QUE UTILICEMOS CON APIS
    constructor(private _http:HttpClient){}

    // SI VAMOS A DEVOLVER LA PETICION, EL OBJETO QUE VAMOS A DEVOLVER ES UN Observable<any> PARA PODER SUSCRIBIRNOS
    getPersonas(): Observable<any>{
        
        let request = "api/personas";
        return this._http.get(this.urlApi+request)
    }

    getPersonasPromise(): Promise<any>{
       
        let request = "api/personas";
        let promise = new Promise((resolve)=>{
            this._http.get(this.urlApi+request).subscribe(response => {
                resolve(response)
            })
        })
        return promise
    }
}