import { Module } from '@nestjs/common';
import { MercadoLibreService } from './mercado-libre.service';
import { MercadoLibreController } from './mercado-libre.controller';

@Module({
  controllers: [MercadoLibreController],
  providers: [MercadoLibreService],
})
export class MercadoLibreModule {}
