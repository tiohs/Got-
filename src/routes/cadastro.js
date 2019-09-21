module.exports = function (app){
    app.get('/cadastro', (req, res) => app.src.controllers.cadastro.cadastro(app, req, res));
    app.post('/cadastrar', (req, res) => app.src.controllers.cadastro.cadastrar(app, req, res));
}