module.exports = function (app) {
    app.get('/', (req, res) => app.src.controllers.index.index(app, req, res));
    app.post('/autenticar', (req, res) => app.src.controllers.index.login(app, req, res));
}

   
    
