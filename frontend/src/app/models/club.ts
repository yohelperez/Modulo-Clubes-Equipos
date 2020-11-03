export class Club {

    constructor(_id = '', identificacion='', nombre = '', municipio= '', telefono = '', logo =''){
        this._id = _id;
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.municipio = municipio;
        this.telefono = telefono;
        this.logo = logo;
    }


    _id : String;
    identificacion : String;
    nombre : String;
    municipio : String;
    telefono : String;
    logo : String;
}
