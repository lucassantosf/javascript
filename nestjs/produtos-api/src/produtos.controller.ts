import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {

    @Get()
    index(): string{
        return 'Index produtos'
    }

    @Get(':id')
    show(@Param() params): string{
        return `Retorna os dados do ${params.id}`
    }

    @Post()
    store(@Body() produto): string{
        return JSON.stringify(produto);
    }

    @Put(':id')
    update(@Body() produto): string{
        return JSON.stringify(produto);
    }

    @Delete(':id')
    destroy(@Param() params): string{
        return 'destroyed'
    }
}