const database = require('../models')

class NivelController {

    static async index(req,res)
    {
        try {
            const data = await database.Nivel.findAll();
            return res.status(200).json(data)
        } catch (error) { 
            return res.status(500).json(error.message)
        }        
    }

    static async show(req,res)
    {
        try {
            const { id } = req.params
            const resource = await database.Nivel.findOne({ 
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
            const resource = await database.Nivel.create(data)
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
            const resource = await database.Nivel.findOne({ 
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
            const resource = await database.Nivel.findOne({ 
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
}

module.exports = NivelController