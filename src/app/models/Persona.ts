export class Persona{
    // PARA QUE REALICE EL BINDING AUTOMATICO
    // LAS PROPIEDADES DEBEN LLAMARSE COMO EL JSON
    constructor(
        public idPersona: number, 
        public Nombre: string, 
        public Email: string,
        public Edad: number
    ){}
}