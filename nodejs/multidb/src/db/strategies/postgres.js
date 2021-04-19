const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')
 
class Postgres extends ICrud{
    constructor(){
        super()
        this._driver = null
        this._herois = null 
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
        this._herois = this._driver.define('heroes',{
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
        await this._herois.sync()
    }
    async create(item){
        const { dataValues } = this._herois.create(item)
        return dataValues
    }
    async connect(){
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
        await this.defineModel()
    }
    create(item){
        console.log('salvo postgres')
    }
}

module.exports = Postgres