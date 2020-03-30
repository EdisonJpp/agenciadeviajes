const sequelize = require('sequelize')

//  databse 
const database = require('../config/database')


// definiendo database

const Testimoniales = database.define( 'testimonios' ,{
    nombre :{
         type :sequelize.STRING
        },
    correo :{
        type : sequelize.STRING
    },
    mensaje:{
        type : sequelize.STRING
    }
});

module.exports = Testimoniales ;