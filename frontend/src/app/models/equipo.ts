export class Equipo {

    constructor(_id = '', nombre = '',identificacion = '', jugadores = '', categoria = '', entrenador='', asistente='', genero = '', estadistica = ''){
        this._id = _id;
        this.nombre = nombre;
        this.estadistica = estadistica;
        this.identificacion = identificacion
        this.jugadores = jugadores;
        this.categoria = categoria;
        this.entrenador = entrenador;
        this.asistente = asistente;
        this.genero = genero;
    }

    estadistica: any;
    nombre: String;
    _id :String;
    identificacion: String;
    jugadores: String;
    categoria: String;
    entrenador: String;
    asistente: String;
    genero: String;
}
