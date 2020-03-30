const viajes = require('../models/viajes');
const Testimonial = require('../models/testimoniales');

exports.infoHome = async (req, res) => {
    const Viajes = await  viajes.findAll({ limit : 3 })
    const testimonial = await Testimonial.findAll({limit : 3})
    res.render('index',{
        pagina :'proximos Viajes',
        Viajes ,
        testimonial,
        clase : 'home'
    });
};