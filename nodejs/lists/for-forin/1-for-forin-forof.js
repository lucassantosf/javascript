const service = require('./service')

async function main(){
    try {
        const result = await service.obterPessoas('a')
        const names = []
        console.time('for')
        for(let i=0; i<= result.results.length - 1 ; i++){
            const person = result.results[i]
            names.push(person.name)
        }
        console.log('name',names)
        console.timeEnd('for')

        console.time('forin')
        for(let i in result.results){
            const person = result.results[i]
            names.push(person.name)
        }

        console.log(names)
        console.timeEnd('forin')

        console.time('forof')
        for(pessoa of result.results){
            names.push(pessoa.name)
        }
        console.log(names)
        console.timeEnd('forof')

    } catch (error) {
        console.error('error interno')
    }
}

main()