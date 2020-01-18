module.exports = (app) => {

    app.get('/perguntas', (req, res) => {
        
        res.render('perguntas');
    });

}