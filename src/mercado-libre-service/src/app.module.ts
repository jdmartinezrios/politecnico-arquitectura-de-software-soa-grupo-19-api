import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MercadoLibreModule } from './mercado-libre/mercado-libre.module';

const EnvConfigModule = ConfigModule.forRoot({
  envFilePath: '../../.env',
});

@Module({
  imports: [EnvConfigModule, MercadoLibreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
