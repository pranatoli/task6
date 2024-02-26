const Sequelize = require('sequelize');
const db = require('../config/database');
const Adress = require('./adress');

const Departament = db.define('departament', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    adressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Adress,
            key: 'id',
        }
    },
},
    {
        timestamps: false,
    })

module.exports = Departament;