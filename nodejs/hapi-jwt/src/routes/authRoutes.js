//npm i jsonwebtoken

const BaseRoute = require('./base/baseRoute')
// const Joi = require('joi')
const JWT = require('jsonwebtoken')

const failAction = (request, headers, erro) => {
    throw erro
}
const USER = {
    username: 'lucas',
    password: '123'
}

class AuthRoutes extends BaseRoute {
    constructor(secret) {
        super()
        this.secret = secret
    }
    login() {
        return {
            path: '/login',
            method: 'POST',
            // config: {
            //     tags: ['api'],
            //     description: 'Obter token',
            //     notes: 'Faz logins com user e senha do banco',
            //     validate: {
            //         failAction,
            //         payload: {
            //             username: Joi.string().required(),
            //             password: Joi.string().required()
            //         }
            //     }
            // },
            handler: (request) => {
                const { username, password } = request.payload

                // if (username.toLowerCase() !== USER.username || password !== USER.password) return false

                const token = JWT.sign({
                    username,
                    id: 1
                }, this.secret)

                return {
                    token
                }

            }
        }
    }
}

module.exports = AuthRoutes