const Sequelize = require('sequelize');
const db = require('../config/database');
const Departament = require('./departament');

const Position = db.define('position', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    departamentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Departament,
            key: 'id',
        }
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
},
    {
        timestamps: false,
    })

module.exports = Position;