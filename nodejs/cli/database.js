const { readFile, writeFile } = require('fs') //file system - manipular arquivos com js - funcao nativa
const { promisify} = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database{
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }
    
    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO,'utf8')
        return JSON.parse(arquivo.toString())
    }

    async escreverArquivo(dados){
        await writeFile(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }

    async cadastrar(heroi){
        const dados = await this.obterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now()

        const heroiFinal = {
            id,
            ...heroi
        }

        const dadosFinal = [
            ...dados,
            heroiFinal
        ]

        const resultado = await this.escreverArquivo(dadosFinal)
        return resultado
    }

    async listar(id){
        const dados = await this.obterDadosArquivo()
        const dadosFiltrado = dados.filter(item=> ( id ? (item.id === id) : true))
        return dadosFiltrado
    }


    async remover(id){
        if(!id){
            return await this.escreverArquivo([])
        }
        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if(!indice){
            throw Error('usuario nao existe')
        }
        dados.splice(indice,1)
        return await this.escreverArquivo(dados)
    }

}

module.exports = new Database()