import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getAllUsers(role?: "admin" | "user"): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    getAllUsersById(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    createUser(user: {
        id: number;
        name: string;
        email: string;
        role: 'admin' | 'user';
    }): {
        role: "admin" | "user";
        id: number;
        name: string;
        email: string;
    };
    updateUser(id: number, userpdate: Partial<{
        id: number;
        name: string;
        email: string;
        role: 'admin' | 'user';
    }>): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    deleteUser(id: number): {
        message: string;
    };
}
