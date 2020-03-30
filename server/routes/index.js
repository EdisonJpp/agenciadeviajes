const express = require('express');
const router = express.Router();

// controladores 
const nosotros = require('../controllers/nosotrosController');
const home = require('../controllers/homeController');
const viajes = require('../controllers/viajesController');
const testimoniales = require('../controllers/testimonialesController');

module.exports = function () {

    router.get('/', home.infoHome );
    router.get('/nosotros', nosotros.infoNosotros );
    router.get('/viajes', viajes.infoViajes );
    router.get('/viajes/:id',viajes.infoViaje );
    router.get('/testimoniales', testimoniales.infoTestimoniales);
    router.post('/testimoniales', testimoniales.AddTestimonial );
    
    return router;
};