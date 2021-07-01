import express from 'express';
import {paginaDeInicio, paginaDeNosotros, paginaDeViajes, paginaDeTestimoniales, paginaDetalleViaje} from '../controlers/paginasControlers.js';
import { guardarTestimonial } from '../controlers/testimonialControler.js';

const router = express.Router();

router.get('/', paginaDeInicio);

router.get('/nosotros', paginaDeNosotros);

router.get('/testimoniales', paginaDeTestimoniales);

router.get('/viajes', paginaDeViajes);

router.get('/viajes/:viaje', paginaDetalleViaje);

router.post('/testimoniales', guardarTestimonial);

export default router;