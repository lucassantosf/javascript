/* CALLBACK'S */
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)
 

function obterUsuario(callback){ 
    
    return new Promise(function resolvePromise(resolve,reject){
        
        setTimeout(()=>{
            //return reject(new Error("Deu ruim"))
            return resolve({
                id: 1,
                nome: 'aladin',
                dataNascimento: new Date()
            })
        },1000)


    })
    
}

function obterTelefone(idUsuario){
    
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            return resolve({
                telefone: '1100230029',
                ddd:'11'
            })
        },1000)
    })
    
}

function obterEndereco(idUsuario,callback){
    setTimeout(()=>{
        return callback(null,{
            rua: 'rua dos bobos',
            ddd: '0'
        })
    },1000)
}
  
    /*
    obterUsuario(function resolverUsuario(error,usuario){
        if(error){
            console.log('ruim',error)
            return;
        }
        obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
            if(error1){
                console.log('ruim telefone',error)
                return;
            } 
            obterEndereco(usuario.id,function resolverEndereco(error2,endereco){
                if(error2){
                    console.log('ruim endereco',error)
                    return;
                } 
                console.log(`
                    nome:${usuario.nome},
                    endereco:${endereco.rua},
                    telefone:${telefone.telefone},
                `)
            })
        })
    })*/

/*  Promises  */
const user = obterUsuario() 

user
    .then(usuario=>{
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result){
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function(resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result){
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function(resultado){
        console.log(`Name: ${resultado.usuario.nome} Address:${resultado.endereco.rua}`)
    })
    .catch(function(error){
        console.error('deu erro',error)
    }) 

