import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './CreateUserDto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
/*
Aqui sim usamos o PartialType, pois o UpdateUserDto deve aceitar campos parciais.
*/
