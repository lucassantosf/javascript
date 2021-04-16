const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')
 
class Postgres extends ICrud{
    constructor(){
        super()
        this._driver = null
        this._herois = null
        this._connect()
    }
    async isConnected(){
        try {
            await this._driver.authenticate()
            return true
        } catch (error) {
            console.log('fail',error)
            return false
        }
    }
    async defineModel(){
        this._herois = driver.define('heroes',{
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
        },{
            tableName: 'tb_herois',
            freezeTableName: false,
            timestamps: false
        })
        await Herois.sync()
    }
    _connect(){
        this._driver = new Sequelize(
            'heroes',
            'lucas',
            '123456',{
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorsAliases: false
            }
        )
    }
    create(item){
        console.log('salvo postgres')
    }
}

module.exports = Postgres