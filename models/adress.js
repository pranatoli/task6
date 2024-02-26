const Sequelize = require('sequelize');
const db = require('../config/database');

const Adress = db.define('adress', {
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
        defaultValue: null,
    },
    appt: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
},
    {
        timestamps: false,
    })

module.exports = Adress;