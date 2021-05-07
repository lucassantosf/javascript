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
}

class MongoDB extends Icrud{
    constructor(){
        super()
    }
    create(item){
        console.log('o item foi salvo mongodb')
    }
}

class Postgres extends Icrud{
    constructor(){
        super()
    }

    create(item){
        console.log('salvo postgres')
    }
}

class ContextStrategy{
    constructor(strategy){
        this._database = strategy
    }

    create(item){
        return this._database.create(item)
    }
    read(item){
        return this._database.read(item)
    }
    update(id, item){
        return this._database.read(id, item)
    }
    delete(id){
        return this._database.delete(id)
    } 
}

