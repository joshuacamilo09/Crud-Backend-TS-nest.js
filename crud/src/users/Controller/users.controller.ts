/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../DTO/CreateUserDto';
import { UsersService } from '../Service/users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService) {} 
  /*
    A tecnica que usamos ate agora é chamada de injecao de dependencia baseada em construtor, onde os provider sao injetados atraves do 
    metodo do construtor. Em certos casos especificos, pode ser necessaria usar a injecaode de dependencia baseada em propriedade..., 
    Onde os provider sao injetados diretamente nas propriedades da classe. 
    Ex: Se a sua classe de nivel superior depender de varios serviços, pode ser mais conveniente usar a injecao de dependencia baseada em propriedade para evitar um construtor longo.
    No entanto, a injecao de dependencia baseada em construtor é a abordagem mais comum e recomendada no NestJS, pois promove a imutabilidade e facilita o teste unitario.
  */


  //GET /users
  @Get()
  getAllUsers(@Query('role') role?: "admin" | "user") {
    return this.userService.getAllUsers(role);
  }

  //GET /users/:id
  @Get(':id')
  getAllUsersById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  //POST /users
  @Post() //adicionamos o vlaidation pipe para validar o dto de criar user 
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  //PATCH /users/:id
  @Patch(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() userpdate: Partial<{id: number, name: string; email: string; role: 'admin' | 'user'}>) {
    return this.userService.updateUser(id, userpdate);
  }

  //DELETE /users/:id
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe)id: number){
    this.userService.deleteUser(id);
    return {message: `User with id ${id} deleted successfully`};
  }
}

//a anotação @Param semppre espera uma string, por isso usamos o ParseIntPipe para converter o id para número! O parseIntPipe serve tambem para validar se o id é um numero!