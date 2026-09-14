const { Sequelize } = require('sequelize')

// Substitua pelos seus dados reais do MySQL
const sequelize = new Sequelize('db_oficina', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = sequelize