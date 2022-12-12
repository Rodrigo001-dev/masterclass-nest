import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  // providers é qualquer coisa que não seja um controller é um provider
  // providers: [AppService],
  providers: [],
})
export class AppModule {}
