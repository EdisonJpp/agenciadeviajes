const Sequelize = require('sequelize')
require('dotenv').config({ path :'variable.env'});

module.exports = new Sequelize('agenciadeviajes', 'root', 'pass', {
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
    define: {
        // The `timestamps` field specify whether or not the `createdAt` and `updatedAt` fields will be created.
        // This was true by default, but now is false by default
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});