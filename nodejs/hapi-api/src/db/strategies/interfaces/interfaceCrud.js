class NotImplementedException extends Error{
    constructor(){
        super("Not implemented exception")
    }
}

class Icrud{
    create(item){
        throw new NotImplementedException()
    }
    readt(query){
        throw new NotImplementedException()
    }
    update(id, item){
        throw new NotImplementedException()
    }
    delete(id){
        throw new NotImplementedException()
    }
    connect(){
        throw new NotImplementedException() 
    }
    isConnected(){
        throw new NotImplementedException()
    }
}

module.exports = Icrud