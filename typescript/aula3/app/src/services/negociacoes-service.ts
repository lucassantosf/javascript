import { NegociacaoDia } from "../interfaces/negociacao-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService{
    public index():Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
            .then(res=>res.json())
            .then((dados:NegociacaoDia[])=>{
                return dados.map(dadoDeHoje=>{
                    return new Negociacao(new Date,dadoDeHoje.vezes,dadoDeHoje.montante)
                })
            })
    }
}