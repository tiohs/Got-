module.exports.cadastro = function (app, req, res) {
    res.render('cadastro', {dados : {}, dadosFor: {}});
}
module.exports.cadastrar = function (app, req, res) {
    var dadosFor = req.body;
    req.assert('nome', 'Nome não pode ser vazio ').notEmpty();
    req.assert('usuario', 'Usuário não pode ser vazio ').notEmpty();
    req.assert('senha', 'Senha não pode ser vazio ').notEmpty();
    req.assert('casa', 'Casa não pode ser vazio ').notEmpty();
    var erros = req.validationErrors();
    if(erros){
        res.render('cadastro', {dados : erros, dadosFor : dadosFor});
        return ;
    }
    res.send('Podemos cadrastrar ');
    console.log(dadosFor);
}