import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";
import { map, Observable } from "rxjs";
import { NestResponse } from "./nest-response";

@Injectable()
export class TransformeResponseInterceptor implements NestInterceptor{

    private httpAdapter: AbstractHttpAdapter;

    constructor(adapterHost: HttpAdapterHost){
        this.httpAdapter = adapterHost.httpAdapter
    }

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle()
                    .pipe(
                        map( (responseController: NestResponse)=>{
                            if(responseController instanceof NestResponse){
                                const contexto = context.switchToHttp()
                                const response = contexto.getResponse()
                                const { headers, status, body} = responseController

                                const nomeCabecalhos = Object.getOwnPropertyNames(headers)

                                nomeCabecalhos.forEach(nomeDoCabecalho=>{
                                    const valor = headers[nomeDoCabecalho]
                                    this.httpAdapter.setHeader(response, nomeDoCabecalho, valor)
                                })

                                this.httpAdapter.status(response, status);

                                return body;
                            }

                            return responseController
                        })
                    );
    }   

}