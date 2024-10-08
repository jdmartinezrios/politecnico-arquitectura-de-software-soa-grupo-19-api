import { Module } from '@nestjs/common';
import { ApiGatewayController } from './app.controller';
import { ApiGatewayService } from './app.service';
import { ConfigModule } from '@nestjs/config';

const EnvConfigModule = ConfigModule.forRoot({
  envFilePath: '../../.env',
});

@Module({
  imports: [EnvConfigModule],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class AppModule {}
