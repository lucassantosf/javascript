const Sequelize = require('sequelize')

const HeroisSchema = {
    name: 'heroes',

    schema: {
        id:{
            type: Sequelize.INTEGER,
            require: true,
            primaryKey:true,
            autoIncrement: true
        },
        nome:{
            type: Sequelize.STRING,
            require: true, 
        },
        poder:{
            type: Sequelize.STRING,
            require: true, 
        }
    },

    options:{
        tableName: 'tb_herois',
        freezeTableName: false,
        timestamps: false
    }

}

module.exports = HeroisSchema