const Sequelize = require('sequelize');
const db = require('../config/database');

const Worker = db.define('workers', {
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
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    positionId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    departamentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    dirthdate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
},
    {
        timestamps: false,
    })

module.exports = Worker;