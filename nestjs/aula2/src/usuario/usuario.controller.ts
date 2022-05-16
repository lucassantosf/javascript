import { Body, Controller, Get, Post, Param, NotFoundException, HttpStatus } from "@nestjs/common";
import { NestResponse } from "../core/http/nest-response";
import { NestResponseBuilder } from "../core/http/nest-response-builder";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController{
    
    constructor(private usuarioService: UsuarioService){}

    @Get(':nome')
    public busca(@Param('nome') nome: string){
        const usuario = this.usuarioService.buscaNome(nome);

        if(!usuario)
        {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Usuario nao encontrado'
            })
        }

        return usuario;
    }

    @Post()
    public store(@Body() usuario: Usuario): NestResponse{
        
        const usuarioCriado = this.usuarioService.store(usuario)
        return new NestResponseBuilder()
            .comStatus(201)
            .comHeaders({
                'Location': `/users/${usuarioCriado.nome}`
            })
            .comBody(usuarioCriado)
            .build()
        
    }

}