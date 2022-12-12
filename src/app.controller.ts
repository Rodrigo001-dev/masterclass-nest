import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  // no princípio de inversão de dependência: quando temos o controller que
  // depende de outro arquivo(AppService) ao invés do Controller(AppController)
  // simplesmente importar e sair utilizando o AppService ele vai dizer que o
  // AppController deve receber no seu construtor as suas dependências como
  // parâmetros, ou seja, quem estiver chamando o AppController é quem envia as
  // dependências para ele e não o AppController vai lá e busca suas dependências
  // constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello() {
    return {
      message: 'Hello Wolrd',
    };
  }
}
