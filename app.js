const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const productsRoutes = require('./routes/productsRoutes.js');
const config = require('./config');
//Declarations
const app = express();

//development
const morgan = require('morgan');

//midlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev')); //development

//configuration
app.use('/public', express.static('public'));
app.set('port',config.port);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({defaultLayout: 'main',
extname:'.hbs'}));
app.set('view engine', '.hbs');

//routes
app.use('/',productsRoutes);
app.get('/home',(req, res)=>{
  res.render('login')
})

app.listen(app.get('port'), ()=>{  console.log(`Aplicación coriendo en el puerto http://localhost:${app.get('port')}`) });
