function UsuariosDOA(connection){
  this._connection = connection(); // Executar a função de connection
}
UsuariosDOA.prototype.addUsuario = function (usuario) {
    console.log(this._connection);   
}
module.exports = function (){
    return UsuariosDOA;
}