const Sequelize = require('sequelize');
const db = require('../config/database');

const Departament = db.define('departaments', {
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
    workerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    adressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

},
    {
        timestamps: false,
    })

module.exports = Departament;