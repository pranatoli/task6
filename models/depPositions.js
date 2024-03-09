const Sequelize = require('sequelize');
const db = require('../config/database');
const Position = require('./position');
const Departament = require('./departament');

const DepPositions = db.define("depPositions", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    positionId: {
        type: Sequelize.INTEGER,
        references: {
            model: Position,
            key: "id",
        },
    },
    departamentId: {
        type: Sequelize.INTEGER,
        references: {
            model: Departament,
            key: "id",
        },
    },
},
    {
        timestamps: false,
    })

module.exports = DepPositions;