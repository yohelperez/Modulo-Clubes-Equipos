const express= require('express');
const router= express.Router();

const clubController = require('../controllers/club.controller'); //objeto que puede hacer todas las funciones del club (agregar, eliminar)

router.get('/', clubController.getClubs)        
router.post('/', clubController.createClub);    //guardar datos
router.get('/:id', clubController.getClub);
router.put('/:id', clubController.editClub);    //editar datos
router.delete('/:id', clubController.deleteClub);

/*
router.get('/', (req, res) => { //se ejecuta cuando se haga una peticion a la ruta inicial del servidor
    res.send('Hello world');
    res.json({
        status: 'Api Works'
    });
});*/

module.exports= router;