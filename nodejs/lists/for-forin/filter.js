const service = require('./service')


async function main(){
    const response = await service.obterPessoas('a');
    
    const filter = response.results.filter(item=>item.name==='Obi-Wan Kenobi')
    console.log(filter)

}

main()
