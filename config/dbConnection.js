// Importando o modulo mongodb 
var mongo = require('mongodb');

// Exportando a biblioteca mongodb

var connection = function (){
    console.log('Passei ...');
    // instanciar variavel de conexão
    var db = new mongo.Db(
        'got', // Nome do banco de dados 
        // instanciar a variavel de server que recebe o localhost e a porta do server
        new mongo.Server(
            'localhost',
            27017,
            {}),
        {}
    )
    return db;
}

module.exports = function (){
    return connection;
}