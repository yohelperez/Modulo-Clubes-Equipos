const express= require('express');
const router= express.Router();

const clubController = require('../controllers/club.controller'); //objeto que puede hacer todas las funciones del club (agregar, eliminar)
const equipoController = require('../controllers/equipo.controller');

router.get('/clubes/', clubController.getClubs)        
router.post('/clubes/', clubController.createClub);    //guardar datos
router.get('/clubes/:id', clubController.getClub);
router.put('/clubes/:id', clubController.editClub);    //editar datos
router.delete('/clubes/:id', clubController.deleteClub);

router.get('/equipos/', equipoController.getEquipos)        
router.post('/equipos/', equipoController.createEquipo);    //guardar datos
router.get('/equipos/:id', equipoController.getEquipo);
router.put('/equipos/:id', equipoController.editEquipo);    //editar datos
router.delete('/equipos/:id', equipoController.deleteEquipo);
 

/*
router.get('/', (req, res) => { //se ejecuta cuando se haga una peticion a la ruta inicial del servidor
    res.send('Hello world');
    res.json({
        status: 'Api Works'
    });
});*/

module.exports= router;