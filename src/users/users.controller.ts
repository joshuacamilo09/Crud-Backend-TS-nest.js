/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService) {}

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
  @Post()
  createUser(@Body() user: {id: number, name: string; email: string; role: 'admin' | 'user'}) {
    return this.userService.createUser(user);
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

//a anotação @Param semppre espera uma string, por isso usamos o ParseIntPipe para converter o id para número!