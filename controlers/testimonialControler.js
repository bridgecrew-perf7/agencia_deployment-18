import { Testimonio } from "../models/Testimoniales.js";

export const guardarTestimonial = async (req, res)=> {

        const {nombre, correo, mensaje} = req.body;

        const errores = [];

        if (nombre.trim() === '' ) {
            errores.push({mensaje: 'El nombre no puede estar vacio'});
        }
        
        if (correo.trim() === '') {
            errores.push({mensaje: 'El correo no puede estar vacio'});
        } 
        
        
        if (mensaje.trim() === '' ) {
            errores.push({mensaje: 'Debes dejar alguna reseña'});
        }
        if (errores.length > 0) {

            try {
                const  testimoniales = await Testimonio.findAll();

            res.render('testimoniales', {
                pagina: 'Testimoniales',
                errores,
                nombre,
                correo,
                mensaje,
                testimoniales
            })
            } catch (error) {
                console.log(error);
            };

        } else {

            try {
                
                await Testimonio.create({
                    nombre,
                    correo,
                    mensaje
                });

                res.redirect('/testimoniales');

            } catch (error) {
                console.log(error);
            };
        };
};

