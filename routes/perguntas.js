module.exports = (app) => {

    app.get('/perguntas', (req, res) => {
        // const teste = req.params.teste;  
        // res.render('perguntas', {nome: teste});
        res.render('perguntas');
    });

}