module.exports.jogo = function (app, req, res) {
    if(req.session.autorizar){
        res.render('jogo', {img_user : req.session.casa});
    }else {
        res.render('index', {dados : {}});
    }
    
}
module.exports.jogoS = function (app, req, res) {
   req.session.destroy(function (error){
        res.render('index', {dados : {}});
        console.log(error);
   });
}