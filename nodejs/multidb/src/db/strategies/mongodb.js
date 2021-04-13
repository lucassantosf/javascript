const ICrud = require('./interfaces/interfaceCrud')

class MongoDB extends ICrud{
    constructor(){
        super()
    }
    create(item){
        console.log('o item foi salvo mongodb')
    }
}

module.exports = MongoDB