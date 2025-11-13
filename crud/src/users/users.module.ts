import { Module } from '@nestjs/common';
import { UsersController } from './Controller/users.controller';
import { UsersService } from './Service/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
