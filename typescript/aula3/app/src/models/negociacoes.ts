import { Objeto } from '../interfaces/objeto.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Objeto<Negociacoes>{
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

    public igual(negociacoes: Negociacoes):boolean{
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista())
    }

}
