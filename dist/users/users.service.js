"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    users = [
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
    getAllUsers(role) {
        if (role === 'admin') {
            return this.users.filter((user) => user.role === 'admin');
        }
        else if (role === 'user') {
            return this.users.filter((user) => user.role === 'user');
        }
        else {
            return this.users;
        }
    }
    getUserById(id) {
        const user = this.users.find((u) => u.id === id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        return user;
    }
    createUser(user) {
        if (this.users.find((u) => u.id === user.id)) {
            throw new common_1.ConflictException('User with id ' + user.id + ' already exists');
        }
        if (this.users.find((u) => u.email === user.email)) {
            throw new common_1.ConflictException(`Email ${user.email} already exists`);
        }
        const newUser = { ...user, role: user.role || 'user' };
        this.users.push(newUser);
        return newUser;
    }
    updateUser(id, userUpdate) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
        if (userUpdate.email !== user.email) {
            if (this.users.find((u) => u.email === userUpdate.email)) {
                throw new common_1.ConflictException(`Email ${userUpdate.email} already exists`);
            }
        }
        const updatedUser = { ...user, ...userUpdate };
        const index = this.users.findIndex((u) => u.id === id);
        this.users[index] = updatedUser;
        return updatedUser;
    }
    deleteUser(id) {
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1)
            return null;
        const deleted = this.users[index];
        this.users.splice(index, 1);
        return deleted;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map