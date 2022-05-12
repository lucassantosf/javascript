import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeUnico } from "./isNomeUnico.validator";

export class Usuario{
    id: number;

    @Expose({
        name: 'username'
    })
    @IsNomeUnico({
        message:'nome precisa ser unico'
    })
    @IsNotEmpty({
        message: 'nome obrigatorio'
    })
    @IsString({
        message: 'nome precisa ser uma string.'
    })
    nome: string;
    
    @Expose({
        name: 'email'
    })
    @IsEmail({}, {
        message: 'email precisa ser um endereço de email válido.'
    })
    email: string;

    @Expose({
        name: 'password'
    })
    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({
        message: 'senha obrigatorio'
    })
    senha: string;

    @Expose({
        name: 'completeName'
    })
    @IsNotEmpty({
        message: 'nomeCompleto obrigatório'
    })
    nomeCompleto: string;
    dataDeEntrada: Date;
}