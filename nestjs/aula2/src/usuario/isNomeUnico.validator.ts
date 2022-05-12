import { Injectable } from "@nestjs/common"
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator"
import { UsuarioService } from "./usuario.service"

@Injectable()
@ValidatorConstraint()
export class IsNomeUnicoConstraint implements ValidatorConstraintInterface{
    constructor(private usuarioService: UsuarioService){}

    validate(nome: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.usuarioService.buscaNome(nome)
    } 
}

export function IsNomeUnico(validationOptions?: ValidationOptions){
    return function (object: Object, propertyName: string){
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints:[],
            validator: IsNomeUnicoConstraint
        })
    }
}