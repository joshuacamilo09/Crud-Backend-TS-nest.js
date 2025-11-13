import { CreateUserDto } from '../DTO/CreateUserDto';
import { UsersService } from '../Service/users.service';
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
    createUser(createUserDto: CreateUserDto): {
        id: number;
        name: string;
        email: string;
        role: "admin" | "user";
    };
    updateUser(id: number, userpdate: Partial<{
        id: number;
        name: string;
        email: string;
        role: 'admin' | 'user';
    }>): {
        name: string;
        email: string;
        role: string;
        id: number;
    };
    deleteUser(id: number): {
        message: string;
    };
}
