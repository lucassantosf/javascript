export function logarTempoDeExecucao(segundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (segundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo ${(t2 - t1) / divisor} ${unidade}`);
        };
        return descriptor;
    };
}
//# sourceMappingURL=logarTempoExecucao.js.map