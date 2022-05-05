import { Imprimivel } from '../utils/imprimivel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Imprimivel{
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string{
        return `
            Data: 1,
            Quantidade: 2,
            Valor: 3,
        `;
    }
}
