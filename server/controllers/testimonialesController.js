const Testimonial = require('../models/testimoniales');

exports.infoTestimoniales = async (req, res) => {
    const testimonial = await Testimonial.findAll()
    res.render('testimoniales',{
        pagina : 'Testimoniales',
        testimonial
    });
};

// agregar testimonial 
exports.AddTestimonial = async (req , res)=>{
    // validar que todos los campos esten llenos
    let {nombre , correo , mensaje} = req.body ;
    let errore = [];

    if(!nombre){
        errore.push({'mensaje' : 'agrega tu nombre'})
    }
    if(!correo){
        errore.push({'mensaje' : 'agrega tu correo'})
    }
    if(!mensaje){
        errore.push({'mensaje' : 'agregar tu mensaje'})
    };

    // revisar si hay errore 
    if(errore.length > 0){
        //  muestra las vista con errores
       const testimonial = await Testimonial.findAll()
        res.render('testimoniales', {
            nombre,
            correo,
            mensaje,
            errore,
            testimonial,
            pagina: 'Tetimoniales'
        });

    }else{
        // almacenar datos en la DTB 
        Testimonial.create({
            nombre,
            correo,
            mensaje
        }) .then(testimonial => res.redirect('/testimoniales'))
           .catch(err => console.log(err));
    };
};