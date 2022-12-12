import { Injectable } from '@nestjs/common';

// injeção de dependência é quando o Nest automáticamente consegue detectar que
// eu tenho um provider(AppService) e ele injeta automáticamente dentro do
// AppController
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
