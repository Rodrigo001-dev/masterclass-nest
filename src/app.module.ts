import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';

import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  // providers é qualquer coisa que não seja um controller é um provider
  // providers: [AppService],
  providers: [
    PrismaService,
    {
      // toda vez que alguem(controller, ou qualquer arquivo da aplicação)
      // solicitar uma classe do tipo RocketMembersRepository
      provide: RocketMembersRepository,
      // eu vou usar a classe PrismaRocketMembersRepository
      // isso é injeção de dependência
      useClass: PrismaRocketMembersRepository,
    },
  ],
})
export class AppModule {}
