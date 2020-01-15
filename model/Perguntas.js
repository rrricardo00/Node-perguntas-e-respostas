const Sequelize = require('sequelize');
const connection = require('../database/database');

const Perguntas = connection.define('pergunta', {
    // attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
            // allowNull defaults to true
    }
}, {
    // options
});