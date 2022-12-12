import { Body, Controller, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

import { PrismaService } from './database/prisma.service';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';

@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}
  // no princípio de inversão de dependência: quando temos o controller que
  // depende de outro arquivo(AppService) ao invés do Controller(AppController)
  // simplesmente importar e sair utilizando o AppService ele vai dizer que o
  // AppController deve receber no seu construtor as suas dependências como
  // parâmetros, ou seja, quem estiver chamando o AppController é quem envia as
  // dependências para ele e não o AppController vai lá e busca suas dependências
  // constructor(private readonly appService: AppService) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });

    return {
      member,
    };
  }
}
