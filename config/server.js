/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar o módulo do body-parser */
var bodyParser = require('body-parser');

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* importar o módulo do express-session */
var expressSession = require('express-session');

/* iniciar o objeto do express */
var app = express();

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './src/views');

/* configurar o middleware express.static */
app.use(express.static('./src/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator());
/*Configurando o middleware espress-session*/
app.use(expressSession({
	secret: 'kdjfbxndslwewnnsdoedkejnfd',
	resave: false,
	saveUninitialized:false 
}));
/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('src/routes')
	.then('config/dbConnection.js')
	.then('src/models')
	.then('src/controllers')
	.into(app);

/* exportar o objeto app */
module.exports = app;