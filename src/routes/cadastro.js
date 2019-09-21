module.exports = function (app){
    app.get('/cadastro', (req, res) => app.src.controllers.cadastro.cadastro(app, req, res));
}