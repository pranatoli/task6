const Sequelize = require('sequelize');
const db = require('../config/database');

const Adress = db.define('adresses', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    house: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    building: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    appt: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    workerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    departamentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

},
    {
        timestamps: false,
    })

module.exports = Adress;