import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';

const app = express();

db.authenticate()
    .then(console.log('base de datos conectada'))
    .catch(error=> console.log(error))

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000

app.set('view engine', 'pug');

app.use(express.urlencoded({extended: true}));

app.use((req, res, next)=> {

    const year = new Date();

    res.locals.fecha = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';

    return next();
});

dotenv.config({path: 'variables.env'});

app.use(express.static('public'));

app.listen(port, host, ()=> {
    console.log('servidor ejecutado correctamente');
})

app.use('/', router);
