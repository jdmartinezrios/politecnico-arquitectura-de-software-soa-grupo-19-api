import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

const EnvConfigModule = ConfigModule.forRoot({
  envFilePath: '../../.env',
});

const DBTypeOrmModule = TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db/sql',
  synchronize: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
});

@Module({
  imports: [EnvConfigModule, DBTypeOrmModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
