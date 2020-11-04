//codigo para configurar el servidor cuando empieza 
//comando en consola para ejecutar el servidor: node server/index.js
const express= require('express'); //modulo de express
const app = express();      //app se encarga de tener toda la funcionalidad del servidor
app.listen(3000, ()=>{
    console.log('server on port 3000');
});