const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE_PRODUCT,
    process.env.DB_USER_PRODUCT,
    process.env.PASSWORD_PRODUCT,
    {
        host: process.env.HOST_PRODUCT,
        dialect: process.env.DIALECT
    }
)

// const sequelize = new Sequelize(
//     process.env.DATABASE_LOCAL,
//     process.env.DB_USER_LOCAL,
//     process.env.PASSWORD_LOCAL,
//     {
//         host: process.env.HOST_LOCAL,
//         dialect: process.env.DIALECT
//     }
// )

module.exports = sequelize;