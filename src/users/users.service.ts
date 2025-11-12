import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

interface User {
  id: number;
  name: string;
  email: string;
  role?: 'admin' | 'user';
}

@Injectable() //declares that this class can be managed by nestJS
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      role: 'admin',
    },
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

  getAllUsers(role?: 'admin' | 'user') {
    if (role === 'admin') {
      return this.users.filter((user) => user.role === 'admin');
    } else if (role === 'user') {
      return this.users.filter((user) => user.role === 'user');
    } else {
      return this.users;
    }
  }

  getUserById(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  createUser(user: User) {
    if (this.users.find((u) => u.id === user.id)) {
      throw new ConflictException(
        'User with id ' + user.id + ' already exists',
      );
    }
    if (this.users.find((u) => u.email === user.email)) {
      throw new ConflictException(`Email ${user.email} already exists`);
    }
    const newUser = { ...user, role: user.role || 'user' };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, userUpdate: Partial<User>) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    if (userUpdate.email !== user.email) {
      if (this.users.find((u) => u.email === userUpdate.email)) {
        throw new ConflictException(`Email ${userUpdate.email} already exists`);
      }
    }
    const updatedUser = { ...user, ...userUpdate };
    const index = this.users.findIndex((u) => u.id === id);
    this.users[index] = updatedUser;
    return updatedUser;
  }

  deleteUser(id: string | number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return null;
    const deleted = this.users[index];
    this.users.splice(index, 1);
    return deleted;
  }
}
