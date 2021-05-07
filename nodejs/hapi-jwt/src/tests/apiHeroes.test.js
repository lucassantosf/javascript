const assert = require('assert')
const api = require('./../api')

const MOCK_DEFAULT_CADASTRAR = {
    nome: 'Chapolin',
    poder: 'Marreta'
}

const MOCK_DEFAULT_INICIAL = {
    nome: 'GaviaoNegro',
    poder: 'Flexas'
}
let MOCK_ID = ''

describe('Suite de testes da Api Heroes',function(){
    this.beforeAll(async()=>{
        app = await api
        const result = await app.inject({
            method: 'POST',
            url: '/herois',
            payload: JSON.stringify(MOCK_DEFAULT_INICIAL)
        })
        const dados = JSON.parse(result.payload)
        MOCK_ID = dados._id
    })

    it('Listar GET /herois',async()=>{
        //injetar/chamar uma requisição para testar a rota
        const result = await app.inject({
            method:'GET',
            url:'/herois?skip=0&limit=10'
        })

        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode

        assert.deepEqual(statusCode,200)
        assert.ok(Array.isArray(dados))
    })

    it('Listar GET /herois - deve retornar somente 3 registros',async()=>{
        const TAMANHO_LIMIT = 3
        const result = await app.inject({
            method:'GET',
            url:`/herois?skip=0&limit=${TAMANHO_LIMIT}`
        })

        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode
      
        assert.deepEqual(statusCode,200)
        assert.ok(dados.length === 3)
    })

    it('Listar GET /herois - deve filtrar um item',async()=>{
        const NAME = MOCK_DEFAULT_INICIAL.nome
        const result = await app.inject({
            method:'GET',
            url:`/herois?skip=0&limit=1000&nome${NAME}`
        })

        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode
        
        assert.deepEqual(statusCode,200)
        assert.ok(dados[0].nome === NAME)
    })

    it('Cadastrar POST - /herois',async()=>{

        const result = await app.inject({
            method:'POST',
            url:`/herois`,
            payload: MOCK_DEFAULT_CADASTRAR
        })

        const statusCode = result.statusCode
        const {message} = JSON.parse(result.payload)

        assert.ok(statusCode === 200) 
        assert.deepEqual(message,'Heroi cadastrado com sucesso')
    })

    it('Atualizar PATCH - /herois/:id', async()=>{
        const _id = MOCK_ID        
        const expected = {
            poder: 'SuperMira'
        }

        const result = await app.inject({
            method:'PATCH',
            url:`/herois/${_id}`,
            payload: JSON.stringify(expected) 
        })
        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)

        assert.ok(statusCode === 200)
        assert.deepEqual(dados.message,'Heroi atualizado com sucesso') 
    })

    it('Atualizar PATCH - herois/:id com id incorreto', async()=>{
        const _id = `${MOCK_ID}01`        
        const expected = {
            poder: 'SuperMira'
        }

        const result = await app.inject({
            method:'PATCH',
            url:`/herois/${_id}`,
            payload: JSON.stringify(expected) 
        })
        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)

        assert.ok(statusCode === 200)
        assert.deepEqual(dados.message,'Nao foi possivel atualizar') 
    })

    it('Remover DELETE - /herois/:id',async()=>{
        const _id = MOCK_ID
        const result = await app.inject({
            method: 'DELETE',
            url: `/herois/${_id}`,
        })

        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)

        assert.ok(statusCode===200)
        assert.deepEqual(dados.message,'Heroi removido com sucesso')
    })
})