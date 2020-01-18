const Sequelize = require('sequelize');
const connection = require('../database/database');

const Perguntas = connection.define('pergunta', {
    // attributes
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Perguntas.sync({force: false}).then(()=>{});

module.exports = Perguntas;