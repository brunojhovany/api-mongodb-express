const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const productsRoutes = require('./routes/productsRoutes.js');
const config = require('./config');
//Declarations
const app = express();

//configuration
app.set('port',config.port);
app.set('views', path.join(__dirname, 'views'));

//midlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev')); //development

//routes
app.use('/',productsRoutes);

app.listen(app.get('port'), ()=>{  console.log(`Aplicación coriendo en el puerto http://localhost:${app.get('port')}`) });
