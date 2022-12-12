import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  @Length(5, 100) // no minimo 5 caracteres no maximo 100
  name: string;

  @IsNotEmpty({
    message: 'The member function should not be empty.',
  })
  function: string;
}
