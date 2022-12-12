import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  // providers é qualquer coisa que não seja um controller é um provider
  // providers: [AppService],
  providers: [PrismaService],
})
export class AppModule {}
