import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from '../DTO/CreateUserDto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com', role: 'admin' },
    {
      id: 2,
      name: 'Alice Smith',
      email: 'alice.smith@gmail.com',
      role: 'admin',
    },
    {
      id: 3,
      name: 'Robert Johnson',
      email: 'robert.johnson@gmail.com',
      role: 'admin',
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@gmail.com',
      role: 'user',
    },
    {
      id: 5,
      name: 'Michael Brown',
      email: 'michael.brown@gmail.com',
      role: 'user',
    },
    {
      id: 6,
      name: 'Sophia Wilson',
      email: 'sophia.wilson@gmail.com',
      role: 'user',
    },
  ];

  private idCounter = 6;

  getAllUsers(role?: 'admin' | 'user') {
    if (role) {
      const rolesArrays = this.users.filter((user) => user.role === role);
      if (rolesArrays.length === 0) {
        throw new NotFoundException('User Role not found');
      }
      return rolesArrays;
    }
    return this.users;
  }

  getUserById(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  createUser(user: CreateUserDto) {
    if (this.users.find((u) => u.email === user.email)) {
      throw new ConflictException(`Email ${user.email} already exists`);
    }
    const newUser = {
      id: ++this.idCounter,
      name: user.name,
      email: user.email,
      role: user.role || 'user',
    };

    this.users.push(newUser);
    return newUser;
  }

  updateUser(
    id: number,
    userUpdate: Partial<{
      name: string;
      email: string;
      role: 'admin' | 'user';
    }>,
  ) {
    const user = this.getUserById(id);

    if (userUpdate.email && userUpdate.email !== user.email) {
      if (this.users.find((u) => u.email === userUpdate.email)) {
        throw new ConflictException(`Email ${userUpdate.email} already exists`);
      }
    }

    const updatedUser = { ...user, ...userUpdate };
    const index = this.users.findIndex((u) => u.id === id);
    this.users[index] = updatedUser;

    return updatedUser;
  }

  deleteUser(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    const deleted = this.users[index];
    this.users.splice(index, 1);
    return deleted;
  }
}
