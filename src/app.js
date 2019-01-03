const bodyParser 	= require('body-parser')
const favicon 		= require('serve-favicon')
const express 		= require('express')
const logger 		= require('morgan');
const path 			= require('path')
const cors 			= require('cors')
const ejs		 	= require('express-ejs-extend')
const app 			= express();
const routes = require('./routes/api')

global.mongoose 	= require('mongoose');
require('./helpers/global-variable');
require('./database/config/mongo-connection');


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

if(ENV.APP_ENV === 'development') app.use(logger('dev'));

app.use('/api', routes);

app.engine('ejs', ejs);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))


app.listen(ENV.APP_PORT, () => {
    if(ENV.APP_ENV === 'development')
    console.log("Server is listening on ",ENV.APP_URL+':'+ENV.APP_PORT);
});