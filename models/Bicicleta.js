const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Bicicleta = db.define('bicicleta',{
    codBicicleta:{
        type:DataTypes.INTEGER,
        autoincrement: true
    },
    tipo:{
        type:DataTypes.ENUM('MOUNTAIN','SPEED'),
        allowNull: false
    },
    aro:{
        type:DataTypes.INTEGER(100),
        allowNull: false
    },
    idCiclista:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{
            key:'codCiclista',
            autoincrement: true
        }
    },
    modelo:{
        type:DataTypes.ENUM('ESPORTE','TRILHA'),
        allowNull: false
    },
    agendamento:{
        type:DataTypes.STRING(100),
        allowNull: false
    },
},{
    timestamps: false,
    tablename: 'bicicletas'
})

module.exports = Bicicleta