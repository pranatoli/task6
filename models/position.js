const Sequelize = require('sequelize');
const db = require('../config/database');

const Position = db.define('positions', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    workerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    startwork: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    endwork: {
        type: Sequelize.DATE,
        allowNull: true,
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