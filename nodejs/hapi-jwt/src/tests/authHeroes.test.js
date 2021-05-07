const assert = require('assert')
const api = require('../api')
let app = {}

describe.only('Auth test suite', function(){
    this.beforeAll(async () => {
        app = await api
    })

    it('Deve obter um token',async()=>{
        const result = await app.inject({
            method: 'POST',
            url: '/login',
            payload:{
                username:'lucas',
                password:'123'
            }
        })

        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)
        console.log('dados',dados)
        assert.deepEqual(statusCode,200)
        assert.ok(dados.token.length >= 10)
    })
})