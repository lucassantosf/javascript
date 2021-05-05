const BaseRoute = require('./base/baseRoute')
const Joi = require('joi')

const failAction = (request,headers,erro)=>{
    throw erro
}

class HeroRoutes extends BaseRoute{
    constructor(db){
        super()
        this.db = db
    }

    list(){
        return {
            path: '/herois',
            method: 'GET',
            // config:{
            //     validate:{
            //         failAction,
            //         query:{
            //             skip: Joi.number().integer().default(0),
            //             limit: Joi.number().integer().default(0),
            //             nome: Joi.string().min(3).max(100)
            //         }
            //     }
            // },
            handler: (request,headers)=>{
                try {

                    const {skip, limit, nome} = request.query
                    const query = {nome : {$regex:`.*${nome}*.`}} 
                    return this.db.read(nome ? query : { },skip,limit)

                } catch (error) {
                    console.log('error',error)
                    return 'Erro interno'
                } 
            }
        }
    } 

    create(){
        return {
            path: '/herois',
            method: 'POST',
            // config: {
            //     validate:{
            //         failAction,
            //         payload:{
            //             nome: Joi.string().required().min(3).max(100),
            //             poder: Joi.string().required().min(2).max(100), 
            //         }
            //     }
            // },
            handler:async (request)=>{ 
                try{
                    const {nome,poder} = request.payload
                    const result = await this.db.create({nome,poder})
                    return {
                        message:'Heroi cadastrado com sucesso',
                        _id: result._id
                    }
                }catch(error){
                    console.log(error)
                    return 'Internal error'
                }
            }
        }
    }

    update(){
        return {
            path: '/herois/{id}',
            method: 'PATCH',
            // config:{
            //     validate:{
            //         params:{
            //             id: Joi.string().required()
            //         },
            //         payload:{
            //             nome: Joi.string().min(3).max(100),
            //             poder: Joi.string().min(3).max(100)
            //         }
            //     }
            // },
            handler:async(request)=>{
                try {
                    const {id} = request.params
                    const {payload} = request
                    
                    const dadosString = JSON.stringify(payload)
                    const dados = JSON.parse(dadosString)
                    const result = await this.db.update(id,dados)
                    
                    if(result.nModified !== 1) return {
                        message: 'Nao foi possivel atualizar'
                    }

                    return {
                        message: 'Heroi atualizado com sucesso'
                    }
                    
                } catch (error) {
                    console.log('error',error)
                    return 'erro interno'
                }
            }
        }
    }

    delete(){
        return {
            path: '/herois/{id}',
            method: 'DELETE',
            config:{
                validate:{
                    failAction,
                    params:{
                        id:Joi.string().required()
                    }
                }
            },
            handler: async (request) =>{
                try {
                    const {id} = request.params
                    const result = await this.db.delete(id)
                    if(result.n !== 1)
                        return 'Não foi possivel remover o item'

                    return{
                        message: 'Heroi removido com sucesso'
                    }
                } catch (error) {
                    console.log('error',error)
                    return 'Erro interno'
                }
            }
        }
    }
}

module.exports = HeroRoutes