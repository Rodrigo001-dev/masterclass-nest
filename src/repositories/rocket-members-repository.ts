// criando o contrato(interface)
// eu não vou implementar com interfaces e sim com abstract class porque quanto
// o Nest vai fazer injeção de dependência se eu uso interface ele não vai
// conseguir fazer a injeção de uma maneira automatizada pois o JavaScript não
// ler o nome da interface que é algo específico do TypeScript, a interface não
// existe depois que o código é compilado para JavaScript
export abstract class RocketMembersRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}
