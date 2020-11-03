export class Equipo {

    constructor(_id = '', identificacion = '', jugadores = '', categoria = '', entrenador='', asistente='', genero = ''){
        this._id = _id;
        this.identificacion = identificacion
        this.jugadores = jugadores;
        this.categoria = categoria;
        this.entrenador = entrenador;
        this.asistente = asistente;
        this.genero = genero;
    }

    _id :String;
    identificacion: String;
    jugadores: String;
    categoria: String;
    entrenador: String;
    asistente: String;
    genero: String;
}
