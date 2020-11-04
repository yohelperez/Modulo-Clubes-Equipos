const Club = require("../models/club"); //con esta variable se pueden hacer consultas a la base de datos, ahi esta el modelo de datos

const clubController= {}; //objeto controlador

clubController.getClubs = async (req, res)=>{
    const clubs= await Club.find(); //busca todos los registros en la base de datos y los guarda cuando termine la consulta
    res.json(clubs);

    /*
    res.json({
        status: 'Clubs goes here'
    });*/
}

clubController.createClub= async(req, res) =>{
    const club =  new Club(req.body);   //crea nuevo objeto con los datos enviados por el navegador
    //console.log(club);
    await club.save();    //guarda el nuevo club en la base de datos
    res.json({
        'status': 'Club Saved'
    });
    /*console.log(req.body);  //la propiedad body del objecto req es la que tiene los datos que manda el navegador para crear clubes
    res.json('received');*/
}

clubController.getClub = async(req, res) =>{
    const club= await Club.findById(req.params.id);
    //console.log(req.params); //params muestra todos los parametros enviados en la url, req.param.id entrega el id
    res.json(club); //cuando lo encuentra lo entrega  

}

clubController.editClub = async(req, res) =>{
    const {id} = req.params;    //obtiene el id de los parametros
    const club={
        id: req.body.id,
        nombre: req.body.nombre,
        municipio: req.body.municipio,
        telefono: req.body.telefono,
        logo: req.body.logo
    };
    await Club.findByIdAndUpdate(id, {$set: club}, {new: true}); //actualiza el dato, si no existe lo crea
    res.json({status: 'Club Updated'});
}

clubController.deleteClub = async(req, res) => {
    await Club.findByIdAndDelete(req.params.id);
    res.json('Club deleted');
}

module.exports= clubController;

