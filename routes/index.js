const modelPergutas = require('../model/Perguntas');

module.exports = (app) => {

    app.get('/', (req, res) => {
        modelPergutas.findAll({ raw: true }).then(perguntas => {
            res.render('index', {
                perguntas: perguntas
            });
        });
    });
}