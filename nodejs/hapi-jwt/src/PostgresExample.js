// npm install sequelize
const Sequelize = require('sequelize')

const driver = new Sequelize(
    'heroes',
    'lucas',
    '123456',{
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
)

async function main(){
    const Herois = driver.define('heroes',{
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

    await Herois.create({
        nome: 'Lanterna Verde',
        poder: 'Anel'
    })

    const result = await Herois.findAll({ raw: true, attributes:['nome']})
    console.log('result',result)
}

main()
