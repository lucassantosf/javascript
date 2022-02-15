const database = require('../models')

class PessoaController {

    static async index(req,res)
    {
        try {
            const data = await database.Pessoa.findAll();
            return res.status(200).json(data)
        } catch (error) { 
            return res.status(500).json(error.message)
        }        
    }

    static async show(req,res)
    {
        try {
            const { id } = req.params
            const resource = await database.Pessoa.findOne({ 
                where : { 
                    id : Number(id) 
                } 
            })
            return res.status(200).json(resource)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async store(req,res)
    {
        try {
            const data = req.body
            const resource = await database.Pessoa.create(data)
            return res.status(200).json(resource)
        } catch (error) {
            return res.status(500).json(error.message) 
        }
    }

    static async update(req,res)
    {
        try {
            const { id } = req.params
            const data = req.body
            const resource = await database.Pessoa.findOne({ 
                where : { 
                    id : Number(id) 
                } 
            })
            resource.update(data)
            return res.status(200).json(resource)
        } catch (error) {
            return res.status(500).json(error.message) 
        }
    }

    static async destroy(req,res)
    {
        try {
            const { id } = req.params
            const resource = await database.Pessoa.findOne({ 
                where : { 
                    id : Number(id) 
                } 
            })
            resource.destroy()
            return res.status(200).json({message: `Destroyed resource id : ${id} `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async matricula(req,res)
    {
        try {
            const { estudante_id, matricula_id } = req.params
            const resource = await database.Matricula.findOne({ 
                where : { 
                    id : Number(matricula_id) , 
                    estudante_id: Number(estudante_id)
                } 
            })
            return res.status(200).json(resource)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async storeMatricula(req,res)
    {
        try {
            const { estudante_id } = req.params
            const data = {...req.body, estudante_id: Number(estudante_id)}
            const resource = await database.Matricula.create(data)
            return res.status(200).json(resource)
        } catch (error) {
            return res.status(500).json(error.message) 
        }
    }

    static async updateMatricula(req,res)
    {
        try {
            const { estudante_id, matricula_id } = req.params
            const data = req.body
            const resource = await database.Matricula.findOne({ 
                where : { 
                    id : Number(matricula_id) ,
                    estudante_id: Number(estudante_id)
                } 
            })
            resource.update(data)
            return res.status(200).json(resource)
        } catch (error) {
            return res.status(500).json(error.message) 
        }
    }

    static async destroyMatricula(req,res)
    {
        try {
            const { estudante_id, matricula_id } = req.params 
            await database.Matricula.destroy({ 
                where : { 
                    id : Number(matricula_id) ,
                    estudante_id: Number(estudante_id)
                } 
            }) 
            return res.status(200).json({message: `Destroyed resource id : ${matricula_id} `})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController