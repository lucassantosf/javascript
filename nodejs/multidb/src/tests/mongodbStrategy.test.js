const assert = require('assert')
const MongoDb = require('./../db/strategies/mongodb')
const Context = require('./../db/strategies/base/contextStrategy')

const context = new Context(new MongoDb())

describe('MongoDB suite de testes',function(){
    this.beforeAll(async()=>{
        await context.connect()
    })
    it.only('verificar conexão',async()=>{
        const result = await context.isConnected()
        const expected = 'Conectado'

        assert.deepEqual(result,expected)
    })
})
