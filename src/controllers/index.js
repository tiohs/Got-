module.exports.index = function (app, req, res) {
    res.render('index', {dados : {}});
}
module.exports.login = function (app, req, res) {
    var dadosFor = req.body;
    req.assert('usuario', 'Nome não pode ser vazio ').notEmpty();
    req.assert('senha', 'senha não pode ser vazio ').notEmpty();
    var erros = req.validationErrors();
    if(erros){
        res.render('index', {dados : erros});
        return ;
    }
    var connection = app.config.dbConnection;
    var usuarioDao = new app.src.models.UsuariosDao(connection);
    usuarioDao.autenticar(dadosFor,req,res);
    

}