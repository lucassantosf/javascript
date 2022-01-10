import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from './produtos.model';

@Controller('produtos')
export class ProdutosController {
    produtos: Produto[] = [
        new Produto('Liv','Livro BDD',29.99),
        new Produto('Liv 2','Livro BDD',29.99),
        new Produto('Liv 3','Livro BDD',29.99),
    ]

    @Get()
    index(): Produto[]{
        return this.produtos
    }

    @Get(':id')
    show(@Param() params): Produto{
        return this.produtos[1]
    }

    @Post()
    store(@Body() produto: Produto){
        this.produtos.push(produto)
    }

    @Put(':id')
    update(@Body() produto: Produto): Produto{
        return produto
    }

    @Delete(':id')
    destroy(@Param() params){
        this.produtos.pop()
    }
}