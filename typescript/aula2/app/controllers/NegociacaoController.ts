import { Weekday } from "../enums/weekdays.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController
{
    private inputData: HTMLInputElement;  
    private inputQuantidade: HTMLInputElement;  
    private inputValor: HTMLInputElement; 
    private negociacoes = new Negociacoes(); 
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor()
    {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    public adiciona(): void
    {  
        const negociacao = this.criaNegociacao()
        if(!this.isValidDay(negociacao.data))
        {
            this.mensagemView.update('Apenas dias uteis são aceitos')
            return
        }
 
        this.negociacoes.adiciona(negociacao)
        this.atualizaView() 
        this.limparFormulario() 
    }

    private isValidDay(date: Date)
    {
        return date.getDay() > Weekday.DOMINGO && date.getDay() < Weekday.SABADO
    }

    private criaNegociacao(): Negociacao
    {
        const exp = /-/g
        const date = new Date(this.inputData.value.replace(exp, ',')) 
        const quantidade = parseInt(this.inputQuantidade.value) 
        const valor = parseFloat(this.inputValor.value) 
        return new Negociacao(date, quantidade, valor)
    }

    private limparFormulario(): void
    {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }

    private atualizaView(): void
    {
        this.negociacoesView.update(this.negociacoes);  
        this.mensagemView.update('Negociacao adicionada'); 
    }
}