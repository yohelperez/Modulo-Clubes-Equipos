const Equipo = require("../models/equipo"); //con esta variable se pueden hacer consultas a la base de datos, ahi esta el modelo de datos

const equipoController= {}; //objeto controlador

equipoController.getEquipos = async (req, res)=>{
    const equipos= await Equipo.find(); //busca todos los registros en la base de datos y los guarda cuando termine la consulta
    res.json(equipos);

    /*
    res.json({
        status: 'Clubs goes here'
    });*/
}
 
equipoController.createEquipo= async(req, res) =>{
    const equipo =  new Equipo(req.body);   //crea nuevo objeto con los datos enviados por el navegador
    //console.log(club);
    await equipo.save();    //guarda el nuevo club en la base de datos
    res.json({
        'status': 'Equipo Saved'
    });

    /*console.log(req.body);  //la propiedad body del objecto req es la que tiene los datos que manda el navegador para crear clubes
    res.json('received');*/
}

equipoController.getEquipo = async(req, res) =>{
    const equipo= await Equipo.findById(req.params.id);
    //console.log(req.params); //params muestra todos los parametros enviados en la url, req.param.id entrega el id
    res.json(equipo); //cuando lo encuentra lo entrega  

}

equipoController.editEquipo = async(req, res) =>{
    const {id} = req.params;    //obtiene el id de los parametros
    const equipo={
        id: req.body.id,
        jugadores: req.body.jugadores,
        categoria: req.body.categoria,
        entrenador: req.body.entrenador,
        asistente: req.body.asistente,
        genero: req.body.genero,
        estadisticas: req.body.estadisticas
    };
    await Equipo.findByIdAndUpdate(id, {$set: equipo}, {new: true}); //actualiza el dato, si no existe lo crea
    res.json({status: 'Equipo Updated'});
}

equipoController.deleteEquipo = async(req, res) => {
    await Equipo.findByIdAndDelete(req.params.id);
    res.json('Equipo deleted');
}

module.exports= equipoController;

