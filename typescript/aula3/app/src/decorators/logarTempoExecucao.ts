export function logarTempoDeExecucao(segundos: boolean = false){
    return function(
        target:any,
        propertyKey:string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value
        descriptor.value = function(...args: any[]){
            let divisor = 1
            let unidade = 'milisegundos'
            if(segundos)
            {
                divisor = 1000
                unidade = 'segundos'
            }

            const t1 = performance.now()
            
            //chamar o metodo original
            const retorno = metodoOriginal.apply(this,args)

            const t2 = performance.now()
            console.log(`${propertyKey}, tempo ${(t2-t1)/divisor} ${unidade}`)
        
        }

        return descriptor
    }
}