import { IsEmail, IsNotEmpty, IsEnum, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Invalid name!' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsEnum(['admin', 'user'], {
    message: 'Invalid role!',
  })
  role?: 'admin' | 'user';
}
/*Não há necessidade de herdar PartialType(UpdateUserDto) aqui.
Isso estava gerando referência circular entre CreateUserDto ↔ UpdateUserDto.*/

//we added a validator from class-validator decorators to ensure the email format is correct, etc
