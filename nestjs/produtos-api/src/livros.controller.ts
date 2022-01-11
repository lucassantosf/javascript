import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from './livro.model';
import { LivroService } from "./livros.services";

@Controller('livros')
export class LivrosController {
    constructor(private livrosService: LivroService){ 
    }

    @Get()
    async index(): Promise<Livro[]>{
        return this.livrosService.obterTodos()
    }

    @Get(':id')
    async show(@Param() params): Promise<Livro>{
        return this.livrosService.obterUm(params.id)
    }

    @Post()
    async store(@Body() livro: Livro){
        this.livrosService.criar(livro)
    }

    @Put(':id')
    async update(@Body() livro: Livro): Promise<[number,Livro[]]>{
        return this.livrosService.alterar(livro)
    }

    @Delete(':id')
    async destroy(@Param() params){
        this.livrosService.apagar(params.id)
    }
}