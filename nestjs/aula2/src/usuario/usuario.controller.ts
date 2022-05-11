import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController{
    
    constructor(private usuarioService: UsuarioService){}

    @Get(':nome')
    public busca(@Param('nome') nome: string){
        const usuario = this.usuarioService.buscaNome(nome);
        return usuario;
    }

    @Post()
    public store(@Body() usuario: Usuario): Usuario{
        const usuarioCriado = this.usuarioService.store(usuario)
        
        return usuarioCriado;
    }

}