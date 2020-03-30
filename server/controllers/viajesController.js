const viajes = require('../models/viajes');

exports.infoViajes = async (req, res) => {
    const Viajes = await viajes.findAll()
    res.render('viajes', {
        pagina: 'proximos Viajes',
        Viajes
    });
};
exports.infoViaje = async (req, res) => {
    const Viajes = await viajes.findByPk(req.params.id)
    res.render('viaje', {
        Viajes
    });
};