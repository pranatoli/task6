const Sequelize = require('sequelize');
const db = require('../config/database');
const Departament = require('./departament');
const Position = require('./position');
const Adress = require('./adress');

const Worker = db.define('worker', {
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
    surname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    middlename: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    male: {
        type: Sequelize.ENUM('man', 'woman'),
        allowNull: false,
    },
    positionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Position,
            key: 'id',
        }
    },
    departamentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Departament,
            key: 'id',
        }
    },
    adressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Adress,
            key: 'id'
        }
    },
    birthdate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
},
    {
        timestamps: false,
    })

module.exports = Worker;