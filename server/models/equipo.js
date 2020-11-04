const mongoose = require('mongoose'); //se usa como una manera de definir el esquema de los datos aqui
const {Schema} = mongoose;

//esquema del modelo de clubs
const EquipoSchema= new Schema({
    id: {type: String, required: true},
    jugadores: {type: Array, required: false},
    categoria: {type: String, required: true},
    entrenador: {type: {}},
    asistente: {type: {}},
    genero: {type: String, required: true},
    estadisticas: {type: Array, required: true}
    
})

module.exports= mongoose.model('Equipo', EquipoSchema); //convierte a un modelo de datos de mongoose