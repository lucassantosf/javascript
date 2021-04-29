//npm install mongoose
const Mongoose = require('mongoose')

Mongoose.connect('mongodb://lucas:123456@localhost:27017/herois',{useNewUrlParser: true},function(error){
    if(!error) return;
    console.log('falha na conexao',error)
})

const connection = Mongoose.connection

// Tipos de função
// function nomeFuncao(){}
// const minhaFuncao = function(){}
// const minhaFuncaoArrow = ()=>{}
// const minhaFuncaoArrow2 = (params)=>console.log(params)

connection.once('open',()=>console.log('database rodando'))

const heroiSchema = new Mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    poder:{
        type: String,
        required: true
    },
    insertedAt:{
        type: Date,
        default: new Date()
    }
})
const model = Mongoose.model('heroi',heroiSchema)

async function main(){
    const resultCadastrar = await model.create({
        nome: 'Batman',
        poder: 'dinheiro'
    })
    console.log('resultCadastrar',resultCadastrar)

    const listItems = await model.find()
    console.log('itens',listItems)
}

main()