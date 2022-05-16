import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FiltroExcessaoHttp } from './common/filtros/excessao.filter';
import { TransformeResponseInterceptor } from './core/http/transforme-response-interceptor';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FiltroExcessaoHttp
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformeResponseInterceptor
    }
  ],
})
export class AppModule {}
