//codigo para configurar el servidor cuando empieza 
//comando en consola para ejecutar el servidor: node server/index.js, npm run dev (con nodemon)
//nodemon sirve para que se actualice el servidor cada que guardo los cambios
//para iniciar mongodb  en un nuevo terminal ejecutar mongod

const express= require('express'); //modulo de express
const app = express();      //app se encarga de tener toda la funcionalidad del servidor
const morgan= require('morgan'); // morgan sirve para ver por consola que está pidiendo el usuario

const {mongoose} = require('./database');


//Settings
app.set('port', process.env.PORT || 3000)   //una variable que se puede acceder desde cualquier parte del proyecto
                                            //el process.env.port es para que use el puerto que de el servicio de la nube (so)

//Middlewares (sección para procesar los datos)
app.use(morgan('dev'));
app.use(express.json()); //ayuda a entender el codigo que viene en formato json

//Routes
//app.use(require('./routes/app.routes'));
app.use('/api/clubes-equipos', require('./routes/app.routes'));

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});