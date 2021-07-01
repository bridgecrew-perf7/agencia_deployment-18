import {Viaje} from '../models/Viajes.js';
import { Testimonio } from '../models/Testimoniales.js';

const paginaDeInicio = async (req, res)=> {

    const promiseDB = [];

    promiseDB.push(Testimonio.findAll({limit: 3}));
    promiseDB.push(Viaje.findAll({limit: 3}));

    try {

        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'inicio',
            clase: 'home',
            viajes: resultado[1],
            testimoniales: resultado[0]
        });
    } catch (error) {
        console.log(error);
    };
};

const paginaDeNosotros = (req, res)=> {

    res.render('nosotros',{
        pagina: 'nosotros'
    });
};

const paginaDeViajes = async (req, res)=> {

    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes',{
        pagina: 'Proximos viajes',
        viajes
    });
};

const paginaDeTestimoniales = async (req, res)=> {

    try {

        const testimoniales = await Testimonio.findAll();

        res.render('testimoniales',{
            pagina: 'testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    };
};

const paginaDetalleViaje = async (req, res) => {

    const {viaje} = req.params;

    try {
        const resultado = await Viaje.findOne({where: { slug: viaje }});

        res.render('viaje',{
            pagina: `Informacion de viaje`,
            resultado
        });
    } catch (error) {
        console.log(error);
    };
};

export {
    paginaDeInicio,
    paginaDeNosotros,
    paginaDeViajes,
    paginaDeTestimoniales,
    paginaDetalleViaje
};