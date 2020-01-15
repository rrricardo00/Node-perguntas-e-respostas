const connection = require('../database/database');

connection.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = (app) => {

    app.post('/salvarpergunta', (req, res) => {
        let titulo = req.body.titulo;
        let descricao = req.body.descricao;
        res.send('formulario recebido! ' + titulo + ' ' + descricao);
    });

}