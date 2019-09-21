module.exports = function (app) {
    app.get('/jogo', (req, res) => app.src.controllers.jogo.jogo(app, req, res))
}