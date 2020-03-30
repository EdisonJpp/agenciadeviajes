const sequelize = require('sequelize');
//  DATABASE 
const db = require('../config/database');

// Autenticando la base de datos 
    // db.authenticate()
    //     .then(() => console.log(' DB exitoooo'))
    //     .catch(error =>console.log('error', error));
const viaje = db.define( 'viajes', {
    titulo : {
        type: sequelize.STRING
    },
    precio: {
        type : sequelize.STRING
    },
    fecha_ida:{
        type: sequelize.DATE
    },
    fecha_vuelta:{
        type: sequelize.DATE
    },
    imagen:{
        type : sequelize.STRING
    },
    descripcion:{
        type : sequelize.STRING
    },
    disponibles : {
        type : sequelize.STRING
    }
});

module.exports = viaje ;

// module.exports = viaje;