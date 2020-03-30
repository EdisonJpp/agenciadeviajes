// importar express 
const express = require('express');
const routes = require('./routes');
const path = require('path');
const configs = require('./config');

const bodyparser = require('body-parser');

require('dotenv').config({ path :'variable.env'});


// confirgurar express \
const app = express();

// validar si estamos en desarrollo o en produccion 
const config = configs[app.get('env')];

// creamos variables para el sitio web 
app.locals.titulo = config.nombresitio ;

// ejecutando body-parser 
app.use(bodyparser.urlencoded({extended: true}));

// cargar rutas 
app.use('/', routes());

// habilitar pug 
app.set('view engine', 'pug');

// añadiendo las vistas 
app.set('views',path.join(__dirname, './views'));

app.use((req, res, next)=>{
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path; 
    // console.log(res.locals); 
    // console.log(req.path);
    // console.log(res.locals);
    return next();
});
// Cargar carpeta estatica llamada public 
app.use(express.static('public'));



// puerto

const host = process.env.HOST || '0.0.0.0' ;
const port = process.env.PORT || 3000 ; 
app.listen(  port, host);



