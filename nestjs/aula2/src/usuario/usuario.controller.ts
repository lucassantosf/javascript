import { Body, Controller, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController{
    
    private usuarioService = new UsuarioService()

    @Post()
    public store(@Body() usuario){
        const usuarioCriado = this.usuarioService.store(usuario)
        
        return usuarioCriado;
    }

}