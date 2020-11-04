const mongoose = require('mongoose'); //se usa como una manera de definir el esquema de los datos aqui
const {Schema} = mongoose;

//esquema del modelo de clubs
const ClubSchema= new Schema({
    id: {type: String, required: true},
    nombre: {type: String, required: true},
    municipio: {type: String, required: true},
    telefono: {type: String, required: true},
    logo: {type: String}

})

module.exports= mongoose.model('Club', ClubSchema); //convierte a un modelo de datos de mongoose