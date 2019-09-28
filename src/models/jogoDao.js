function jogoDOA(connection){
    this._connection = connection(); // Executar a função de connection
  }

jogoDOA.prototype.postPa = function (usuario) {   
    this._connection.open(function (erro, mongoClient) { // Usando a a função de conexão do mongodb e iniciando uma conexão com função de callback
        mongoClient.collection('jogo', function(erro, collection){ // Fazendo uma collection nome da tabela e função de calback com a collection 
             collection.insert({
                 usuario: usuario, 
                 moeda: 15,
                 suditos: 10,
                 sabedoria: Math.floor(Math.random() * 1000),
                 comercio: Math.floor(Math.random() * 1000),
                 magia: Math.floor(Math.random() * 1000)
             }); // Gerando dados random para o user ...
             mongoClient.close(); // Fechando a conexão 
        });
    });
 }
module.exports = function (){
    return jogoDOA;
}