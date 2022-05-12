import { Module } from "@nestjs/common";
import { IsNomeUnicoConstraint } from "./isNomeUnico.validator";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioService,IsNomeUnicoConstraint]
})
export class UsuarioModule{

}