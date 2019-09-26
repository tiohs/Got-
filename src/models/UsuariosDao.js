function UsuariosDOA(connection){
  this._connection = connection(); // Executar a função de connection
}
UsuariosDOA.prototype.addUsuario = function (usuario) {   // Dados vindo do forme  
   this._connection.open(function (erro, mongoClient) { // Usando a a função de conexão do mongodb e iniciando uma conexão com função de callback
       mongoClient.collection('usuaruios', function(erro, collection){ // Fazendo uma collection nome da tabela e função de calback com a collection 
            collection.insert(usuario); // Usando a collection usuario 
            mongoClient.close(); // Fechando a conexão 
       });
   });
}
UsuariosDOA.prototype.autenticar = function (usuario,req,res) {   // Dados vindo do forme  
  this._connection.open(function (erro, mongoClient) { // Usando a a função de conexão do mongodb e iniciando uma conexão com função de callback
      mongoClient.collection('usuaruios', function(erro, collection){ // Fazendo uma collection nome da tabela e função de calback com a collection 
           collection.find(usuario).toArray((erro, result) => {
             if(result[0] != undefined){
               req.session.autorizar = true;
               req.session.usuario = result[0].usuario;
               req.session.casa = result[0].casa;
              }
              if(req.session.autorizar){
                res.redirect('jogo');
              }else{
                mongoClient.close();
                return res.render('index', {dados : {}});
              }

          }); // Usando a collection usuario 
           mongoClient.close(); // Fechando a conexão 
      });
  });
}
module.exports = function (){
    return UsuariosDOA;
}
